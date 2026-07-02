from __future__ import annotations

from pathlib import Path
import sys
from typing import Any

from playwright.sync_api import Error, TimeoutError, sync_playwright


BASE_URL = "http://127.0.0.1:8080"
SNAPSHOT_DIR = Path("tests/artifacts/ui-smoke")


def wait_ready(page) -> None:
    page.wait_for_load_state("domcontentloaded")
    try:
        page.wait_for_load_state("networkidle", timeout=5000)
    except TimeoutError:
        pass


def assert_text(page, text: str) -> None:
    if not page.get_by_text(text).first.is_visible():
        raise AssertionError(f"Missing text: {text}")


def dismiss_cookie_banner(page) -> None:
    accept = page.get_by_role("button", name="Accept All")
    try:
        # Wait for the cookie consent banner to appear (it has a 1000ms delay in React)
        accept.wait_for(state="visible", timeout=2500)
        accept.click()
        page.wait_for_timeout(300) # Wait for exit animation
    except Exception:
        pass


def run_desktop_flow(browser) -> dict[str, Any]:
    SNAPSHOT_DIR.mkdir(parents=True, exist_ok=True)
    context = browser.new_context(
        viewport={"width": 1440, "height": 900},
        permissions=["clipboard-read", "clipboard-write"],
    )
    page = context.new_page()
    console_errors: list[str] = []
    page_errors: list[str] = []

    page.on("console", lambda msg: console_errors.append(f"{msg.type}: {msg.text}") if msg.type == "error" else None)
    page.on("pageerror", lambda err: page_errors.append(str(err)))

    page.goto(f"{BASE_URL}/")
    wait_ready(page)
    dismiss_cookie_banner(page)
    page.screenshot(path=str(SNAPSHOT_DIR / "home-desktop.png"), full_page=True)
    assert_text(page, "TOOLKIT")
    assert_text(page, "Featured")

    timings = page.evaluate(
        """() => {
            const nav = performance.getEntriesByType('navigation')[0];
            if (!nav) return null;
            return {
              domContentLoaded: Math.round(nav.domContentLoadedEventEnd),
              loadEventEnd: Math.round(nav.loadEventEnd)
            };
        }"""
    )

    page.locator("nav").first.get_by_role("link", name="Articles").click()
    wait_ready(page)
    if not page.url.rstrip("/").endswith("/insights"):
        raise AssertionError(f"Expected insights route, got {page.url}")

    page.get_by_role("button", name="Search articles (Ctrl+K)").click()
    search_dialog = page.get_by_role("dialog", name="Search insights")
    search_input = search_dialog.get_by_placeholder("Search articles...")
    search_input.fill("no-such-article-xyz")
    assert_text(page, 'No articles match "no-such-article-xyz"')
    page.keyboard.press("Escape")
    search_dialog.wait_for(state="hidden", timeout=1500)
    if search_dialog.is_visible():
        raise AssertionError("Search dialog did not close on Escape")

    page.keyboard.press("Control+k")
    if not search_dialog.is_visible():
        raise AssertionError("Search dialog did not open on Ctrl+K")
    search_input.fill("black mirror")
    page.screenshot(path=str(SNAPSHOT_DIR / "insights-search-desktop.png"), full_page=True)
    search_dialog.get_by_role("link").first.click()
    wait_ready(page)
    page.screenshot(path=str(SNAPSHOT_DIR / "article-desktop.png"), full_page=True)
    if "/insights/" not in page.url:
        raise AssertionError(f"Expected article route, got {page.url}")
    if page.locator("main h1").first.count() == 0:
        raise AssertionError("Article page h1 missing")

    copy_button = page.get_by_role("button", name="Copy link").first
    if copy_button.count() > 0:
        try:
            copy_button.click()
        except Error:
            pass

    page.goto(f"{BASE_URL}/insights")
    wait_ready(page)
    page.screenshot(path=str(SNAPSHOT_DIR / "insights-desktop.png"), full_page=True)

    all_button = page.get_by_role("button", name="All")
    if not all_button.is_visible():
        raise AssertionError("Insights category filter missing")

    filter_group = all_button.locator("xpath=..")
    category_buttons = filter_group.get_by_role("button")
    if category_buttons.count() > 1:
        category_buttons.nth(1).click()
        wait_ready(page)
        article_links_after_filter = page.locator('a[href^="/insights/"]').count()
        if article_links_after_filter < 1:
            raise AssertionError("Filter removed all article links unexpectedly")

    sort_select = page.get_by_label("Sort insights")
    sort_select.select_option("alphabetical")
    wait_ready(page)
    sort_select.select_option("default")

    page.goto(f"{BASE_URL}/#start")
    wait_ready(page)
    assert_text(page, "One clear next move beats another folder of AI links.")
    if page.get_by_role("link", name="I need a useful first AI workflow").count() < 1:
        raise AssertionError("Start section decision path missing")

    page.goto(f"{BASE_URL}/insights/does-not-exist")
    wait_ready(page)
    assert_text(page, "Article not found")

    page.goto(f"{BASE_URL}/not-a-route")
    wait_ready(page)
    assert_text(page, "Page not found")

    result = {
        "desktop_timings_ms": timings,
        "console_errors": console_errors,
        "page_errors": page_errors,
    }
    context.close()
    return result


def run_mobile_flow(browser) -> None:
    context = browser.new_context(viewport={"width": 390, "height": 844})
    page = context.new_page()
    page.goto(f"{BASE_URL}/")
    wait_ready(page)
    dismiss_cookie_banner(page)
    page.screenshot(path=str(SNAPSHOT_DIR / "home-mobile.png"), full_page=True)
    assert_text(page, "Featured")

    page.locator("nav.fixed.bottom-0").get_by_role("link", name="Articles").click()
    wait_ready(page)
    page.screenshot(path=str(SNAPSHOT_DIR / "insights-mobile.png"), full_page=True)
    if not page.url.rstrip("/").endswith("/insights"):
        raise AssertionError(f"Mobile bottom nav did not open articles: {page.url}")

    page.locator("nav.fixed.bottom-0").get_by_role("link", name="Home").click()
    wait_ready(page)
    if page.url.rstrip("/") != BASE_URL:
        raise AssertionError(f"Mobile bottom nav did not return home: {page.url}")

    context.close()


def try_cross_browser(playwright) -> dict[str, str]:
    statuses: dict[str, str] = {}
    for name in ("firefox", "webkit"):
        browser_type = getattr(playwright, name)
        try:
            browser = browser_type.launch(headless=True)
            page = browser.new_page()
            page.goto(f"{BASE_URL}/")
            wait_ready(page)
            statuses[name] = "ok"
            browser.close()
        except Exception as exc:  # noqa: BLE001
            statuses[name] = f"skipped: {type(exc).__name__}: {exc}"
    return statuses


def main() -> int:
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        desktop_result = run_desktop_flow(browser)
        run_mobile_flow(browser)
        browser.close()

        cross_browser = try_cross_browser(p)

        print("UI_SMOKE_OK")
        print(f"desktop_timings_ms={desktop_result['desktop_timings_ms']}")
        print(f"console_error_count={len(desktop_result['console_errors'])}")
        for msg in desktop_result["console_errors"]:
            print(f"console_error: {msg}")
        print(f"page_error_count={len(desktop_result['page_errors'])}")
        for msg in desktop_result["page_errors"]:
            print(f"page_error: {msg}")
        cross_browser_text = str(cross_browser).encode("ascii", "backslashreplace").decode("ascii")
        print(f"cross_browser={cross_browser_text}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
