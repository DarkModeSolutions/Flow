"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTransitionRouter } from "@/hooks/useTransitionRouter";

const TransitionHeader = () => {
  const pathname = usePathname();
  const [route, setRoute] = useState("home");
  const { transitionTo } = useTransitionRouter();

  useEffect(() => {
    setRoute(pathname);
  }, [pathname]);

  const handleNavigation = (href: string) => {
    if (href !== pathname) {
      transitionTo(href);
    }
  };

  return (
    <div>
      <header className="w-full">
        <h1 className="text-xl font-bold text-center">Flow App</h1>
        <nav className="mt-4 w-full">
          <ul className="w-full flex space-x-4 justify-around">
            <li>
              <button
                onClick={() => handleNavigation("/")}
                className={`p-2 rounded transition-colors hover:bg-gray-100 ${
                  route === "/" ? "bg-black text-white" : ""
                }`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/about")}
                className={`p-2 rounded transition-colors hover:bg-gray-100 ${
                  route === "/about" ? "bg-black text-white" : ""
                }`}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/contact-details")}
                className={`p-2 rounded transition-colors hover:bg-gray-100 ${
                  route === "/contact-details" ? "bg-black text-white" : ""
                }`}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default TransitionHeader;
