import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export const ScrollManager = ({ section, onSectionChange }) => {
  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  // ✅ Fix: run once
  useEffect(() => {
    data.fill.classList.add("top-0", "absolute");
  }, [data]);

  // ✅ Scroll to section (programmatic)
  useEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      ease: "power2.out",
      onStart: () => (isAnimating.current = true),
      onComplete: () => (isAnimating.current = false),
    });
  }, [section, data]);

  // ✅ Detect section on scroll
  useFrame(() => {
    if (isAnimating.current) return;

    const curScroll = data.scroll.current;
    const curSection = Math.floor(curScroll * data.pages);

    if (curSection !== section) {
      onSectionChange(curSection);
    }

    lastScroll.current = curScroll;
  });

  return null;
};