import { useInView } from "framer-motion";
import { useRef } from "react";
import type { Easing } from "framer-motion";

export const useScrollReveal = (options = { once: true, margin: "-100px" as const }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, options);
  
  return { ref, isInView };
};

const easeOut: Easing = [0.25, 0.46, 0.45, 0.94];

export const scrollRevealVariants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: easeOut
    }
  })
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut
    }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeOut
    }
  }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easeOut
    }
  }
};

export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easeOut
    }
  }
};
