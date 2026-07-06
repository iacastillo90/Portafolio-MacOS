import React, { useState, useEffect, useRef } from "react";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const EMOJIS = ["\\(o_o)/", "(˚Δ˚)b", "(^-^*)", "(‵′)", "\\(°ˊДˋ°)/", "(‵′)"];

const getEmoji = () => {
  return EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
};

const HowDare = ({ setRMRF }) => {
  const FONT_SIZE = 12;

  const [emoji, setEmoji] = useState("");
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const dropsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    if (!container || !canvas) return;

    canvas.height = container.offsetHeight;
    canvas.width = container.offsetWidth;

    const columns = Math.floor(canvas.width / FONT_SIZE);
    dropsRef.current = Array(columns).fill(1);

    setEmoji(getEmoji());

    const rain = () => {
      if (!canvasRef.current) return;
      const ctx = canvasRef.current.getContext("2d");

      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      ctx.fillStyle = "#2e9244";
      ctx.font = `${FONT_SIZE}px arial`;

      dropsRef.current.forEach((y, x) => {
        const text = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        ctx.fillText(text, x * FONT_SIZE, y * FONT_SIZE);
      });

      dropsRef.current = dropsRef.current.map((y) => {
        if (y * FONT_SIZE > canvasRef.current.height && Math.random() > 0.975) return 1;
        else return y + 1;
      });
    };

    const interval = setInterval(rain, 33);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed h-full w-full bg-black text-white z-50 top-0 left-0"
      onClick={() => setRMRF(false)}
    >
      <canvas ref={canvasRef}></canvas>
      <div className="absolute h-28 text-center space-y-4 m-auto inset-0 font-mono">
        <div className="text-4xl">{emoji}</div>
        <div className="text-3xl">HOW DARE YOU!</div>
        <div>Click to go back</div>
      </div>
    </div>
  );
};

export default HowDare;
