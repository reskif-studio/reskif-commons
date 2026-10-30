"use client";
// reskif-commons — composant React de l'effet riso (reconstruit depuis reskif.org).
// <Riso image="/img.jpg" ink="#7c2d12" paper="#fb923c" className="absolute inset-0" />
import { useEffect, useRef, useState } from "react";

type Props = { image: string; ink?: string; paper?: string; brightness?: number; contrast?: number;
  dotSize?: number; angle?: number; softness?: number; shaderContrast?: number;
  dotShape?: "round" | "diamond" | "line"; grain?: number; grainSize?: number; className?: string; alt?: string };

declare global { interface Window { ReskifRiso?: { mount: (el: HTMLElement) => void } } }

// Charge riso.js (copié dans /public/js/riso.js) une seule fois, puis délègue le rendu.
let loading: Promise<void> | null = null;
function load(src = "/js/riso.js") {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.ReskifRiso) return Promise.resolve();
  return (loading ??= new Promise((res, rej) => { const s = document.createElement("script"); s.src = src; s.onload = () => res(); s.onerror = rej; document.head.appendChild(s); }));
}

export function Riso(p: Props) {
  const ref = useRef<HTMLDivElement>(null); const [key] = useState(() => Math.random());
  useEffect(() => { const el = ref.current; if (!el) return; load().then(() => window.ReskifRiso?.mount(el)); }, [key]);
  const d: Record<string, string> = { "data-riso": "", "data-image": p.image };
  const map: [keyof Props, string][] = [["ink","ink"],["paper","paper"],["brightness","brightness"],["contrast","contrast"],["dotSize","dot-size"],["angle","angle"],["softness","softness"],["shaderContrast","shader-contrast"],["dotShape","dot-shape"],["grain","grain"],["grainSize","grain-size"],["alt","alt"]];
  for (const [k, a] of map) if (p[k] !== undefined) d["data-" + a] = String(p[k]);
  return <div ref={ref} className={p.className} aria-hidden={!p.alt} {...d} />;
}
