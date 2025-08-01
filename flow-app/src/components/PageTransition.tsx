"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set initial state
    gsap.set(container, {
      opacity: 0,
      y: 30,
    });

    // Animate in
    gsap.to(container, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.1,
    });

    // Cleanup function for page exit animation
    return () => {
      gsap.to(container, {
        opacity: 0,
        y: -30,
        duration: 0.4,
        ease: "power2.in",
      });
    };
  }, [pathname]);

  return (
    <div ref={containerRef} className="w-full h-full">
      {children}
    </div>
  );
};

export default PageTransition;
