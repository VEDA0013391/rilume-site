"use client";

import { useEffect, useState } from "react";

type Props = {
  value: number;
};

export default function CountUp({ value }: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1200;
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min(
        (time - start) / duration,
        1
      );

      // easeOut
      const eased =
        1 - Math.pow(1 - progress, 3);

      setCount(
        Math.floor(value * eased)
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return count.toLocaleString();
}