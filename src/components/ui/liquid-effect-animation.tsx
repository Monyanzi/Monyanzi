import { useCallback, useEffect, useRef } from "react";

interface LiquidEffectAnimationProps {
  text?: string[];
  subText?: string;
  tagline?: string;
  textColor?: string;
}

const drawText = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  text: string[],
  subText: string | undefined,
  tagline: string | undefined,
  textColor: string,
) => {
  ctx.fillStyle = textColor;
  ctx.textAlign = "center";

  if (subText) {
    ctx.globalAlpha = 0.35;
    const subFontSize = Math.max(11, width * 0.009);
    ctx.font = `600 ${subFontSize}px -apple-system, "SF Pro Display", "Helvetica Neue", Arial, sans-serif`;
    ctx.letterSpacing = "0.25em";
    ctx.fillText(subText.toUpperCase(), width / 2, height / 2 - width * 0.095);
  }

  if (text.length > 0) {
    ctx.globalAlpha = 1;
    ctx.letterSpacing = "-0.04em";
    const fontSize = Math.min(width * 0.13, height * 0.19);
    const lineHeight = fontSize * 1.08;
    const totalHeight = text.length * lineHeight;
    const startY = height / 2 - totalHeight / 2 + lineHeight / 2;

    ctx.font = `700 ${fontSize}px -apple-system, "SF Pro Display", "Helvetica Neue", Arial, sans-serif`;
    ctx.textBaseline = "middle";
    text.forEach((line, index) => {
      ctx.fillText(line, width / 2, startY + index * lineHeight);
    });

    ctx.globalAlpha = 0.12;
    const dividerY = startY + text.length * lineHeight + width * 0.018;
    ctx.fillRect(width / 2 - 30, dividerY, 60, 0.5);
  }

  if (tagline) {
    ctx.globalAlpha = 0.3;
    ctx.letterSpacing = "0.02em";
    const tagFontSize = Math.max(11, width * 0.01);
    ctx.font = `400 ${tagFontSize}px -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif`;
    ctx.fillText(tagline, width / 2, height / 2 + width * 0.16);
  }

  ctx.globalAlpha = 1;
}

export function LiquidEffectAnimation({
  text = [],
  subText,
  tagline,
  textColor = "#1d1d1f",
}: LiquidEffectAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const renderFrame = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#f3f5f6";
      ctx.fillRect(0, 0, width, height);

      const wave = (offset: number, scale = 1) => Math.sin(time * scale + offset);
      const brushes = [
        {
          x: 0.1 + wave(0, 0.65) * 0.035,
          y: 0.02 + wave(1.8, 0.5) * 0.035,
          radius: 0.82,
          color: "rgba(210, 238, 225, 0.68)",
          end: "rgba(210, 238, 225, 0)",
        },
        {
          x: 0.9 + wave(2.1, 0.45) * 0.035,
          y: 0.42 + wave(0.7, 0.58) * 0.04,
          radius: 0.8,
          color: "rgba(235, 225, 245, 0.92)",
          end: "rgba(235, 225, 245, 0)",
        },
        {
          x: 0.2 + wave(4.3, 0.5) * 0.04,
          y: 0.98 + wave(3.1, 0.42) * 0.035,
          radius: 0.7,
          color: "rgba(235, 225, 245, 0.78)",
          end: "rgba(235, 225, 245, 0)",
        },
        {
          x: 0.8 + wave(5.1, 0.48) * 0.035,
          y: 0.9 + wave(2.8, 0.55) * 0.03,
          radius: 0.68,
          color: "rgba(210, 238, 225, 0.52)",
          end: "rgba(210, 238, 225, 0)",
        },
      ];

      for (const brush of brushes) {
        const gradient = ctx.createRadialGradient(
          width * brush.x,
          height * brush.y,
          0,
          width * brush.x,
          height * brush.y,
          Math.max(width, height) * brush.radius,
        );
        gradient.addColorStop(0, brush.color);
        gradient.addColorStop(1, brush.end);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      ctx.globalAlpha = 0.08;
      ctx.strokeStyle = "rgba(255,255,255,0.5)";
      ctx.lineWidth = Math.max(width, height) * 0.18;
      ctx.beginPath();
      ctx.moveTo(width * (0.1 + wave(1.4, 0.32) * 0.04), height * 0.08);
      ctx.bezierCurveTo(width * 0.36, height * 0.32, width * 0.62, height * 0.06, width * 0.95, height * 0.35);
      ctx.stroke();
      ctx.globalAlpha = 1;

      drawText(ctx, width, height, text, subText, tagline, textColor);
    },
    [subText, tagline, text, textColor],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const animate = (timestamp: number) => {
      renderFrame(ctx, window.innerWidth, window.innerHeight, timestamp / 1000);
      animationFrame = window.requestAnimationFrame(animate);
    };

    resize();
    animationFrame = window.requestAnimationFrame(animate);
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, [renderFrame]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#f3f5f6]" aria-hidden="true">
      <canvas ref={canvasRef} className="fixed inset-0 h-full w-full" />
    </div>
  );
}
