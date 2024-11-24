"use client";
import Lenis from "lenis";
import { useEffect, useState, createContext, useContext } from "react";

import React from "react";

const SmoothScrollerContext = createContext();

export const useSmoothScroller = () => useContext(SmoothScrollerContext);

export default function SmoothScroll({ children }) {
  const [lenisRef, setLenis] = useState(null);
  const [rafState, setRaf] = useState(null);

  useEffect(() => {
    const scroller = new Lenis();
    let rf;

    function raf(time) {
      scroller.raf(time);
      requestAnimationFrame(raf);
    }

    rf = requestAnimationFrame(raf);
    setLenis(scroller);
    setRaf(rf);

    return () => {
      if (lenisRef) {
        cancelAnimationFrame(rafState);
        lenisRef.destroy();
      }
    };
  }, []);

  return (
    <SmoothScrollerContext.Provider value={lenisRef}>
      {children}
    </SmoothScrollerContext.Provider>
  );
}
