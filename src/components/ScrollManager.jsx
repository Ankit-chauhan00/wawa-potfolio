import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export const ScrollManager = (props) => {
  const { section, onSectionChange } = props;

  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

 
  useEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [section,data]);

  useEffect(() => {
  data.fill.classList.add("top-0", "absolute");
}, [data]);


  useFrame(() => {
  if (isAnimating.current) return;

  const curScroll = data.scroll.current;

  const curSection = Math.round(
    curScroll * (data.pages - 1)
  );

  if (curSection !== section) {
    onSectionChange(curSection);
  }

  lastScroll.current = curScroll;
});

  return null;
};