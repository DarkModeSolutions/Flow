"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

interface TransitionLayoutProps {
  children: React.ReactNode;
}

const TransitionLayout = ({ children }: TransitionLayoutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set initial state
    gsap.set(container, {
      opacity: 0,
      y: 20,
    });

    // Animate in
    gsap.to(container, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.1,
    });
  }, [pathname]);

  return (
    <div ref={containerRef} className="w-full h-full" data-transition-container>
      {children}
    </div>
  );
};

export default TransitionLayout;
