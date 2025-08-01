"use client";

import { useRouter } from "next/navigation";
import { gsap } from "gsap";

export const useTransitionRouter = () => {
  const router = useRouter();

  const transitionTo = (href: string) => {
    // Find the main content container
    const contentContainer =
      document.querySelector("[data-transition-container]") ||
      document.querySelector("main") ||
      document.body;

    // Create exit animation - fade out current content
    gsap.to(contentContainer, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        router.push(href);
      },
    });
  };

  return { transitionTo, router };
};
