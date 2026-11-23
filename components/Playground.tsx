"use client";

import { useEffect, useRef } from "react";
import { createPlayground } from "@/lib/playground-engine";

/** The PLAYGROUND mini soccer game: cleat cursor, click to kick, one goal on the right. */
export default function Playground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const game = createPlayground(ref.current, {
      displayFont: "'Instrument Sans', system-ui, sans-serif",
      monoFont: "'DM Mono', ui-monospace, monospace",
    });
    return () => game.destroy();
  }, []);

  return <div ref={ref} />;
}
