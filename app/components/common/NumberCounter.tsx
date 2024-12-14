"use client";
import {
  animate,
  KeyframeOptions,
  useInView,
  useIsomorphicLayoutEffect,
} from "framer-motion";
import React, { useRef } from "react";

const NumberCounter = ({
  from,
  to,
  animationOptions,
  decimal = false,
  duration = 1,
}: {
  from: number;
  to: number;
  animationOptions?: KeyframeOptions;
  decimal?: boolean;
  duration?: number;
}) => {
  const numberRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(numberRef, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = numberRef.current;

    if (!element) return;
    if (!inView) return;

    element.textContent = String(from);

    const controls = animate(from, to, {
      duration: duration,
      ease: "easeInOut",
      ...animationOptions,
      onUpdate(latest) {
        element.textContent = String(
          decimal ? latest.toFixed(1) : latest.toFixed(0)
        );
      },
    });

    return () => {
      controls.stop();
    };
  }, [numberRef, from, to, inView]);

  return <span ref={numberRef} />;
};

export default NumberCounter;
