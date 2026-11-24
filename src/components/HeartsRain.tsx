"use client";

import { useEffect, useState } from "react";

interface HeartItem {
  id: number;
  emoji: string;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

interface HeartsRainProps {
  count?: number;
  trigger?: number;
}

export default function HeartsRain({ count = 25, trigger = 0 }: HeartsRainProps) {
  const [items, setItems] = useState<HeartItem[]>([]);

  useEffect(() => {
    if (trigger === 0) return;
    const emojis = ["💗", "🐼", "💖", "🐻"];
    const generated: HeartItem[] = Array.from({ length: count }, (_, i) => ({
      id: Date.now() + i,
      emoji: emojis[i % emojis.length],
      left: Math.random() * 95,
      size: 14 + Math.random() * 24,
      duration: 3 + Math.random() * 3,
      delay: Math.random() * 1.2,
    }));

    setItems(generated);

    const timer = setTimeout(() => {
      setItems([]);
    }, 7000);

    return () => clearTimeout(timer);
  }, [trigger, count]);

  if (items.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {items.map((item) => (
        <span
          key={item.id}
          className="absolute -top-10 heart-fall select-none"
          style={{
            left: `${item.left}vw`,
            fontSize: `${item.size}px`,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
          }}
        >
          {item.emoji}
        </span>
      ))}
    </div>
  );
}

