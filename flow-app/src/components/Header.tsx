"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [route, setRoute] = useState("home");

  useEffect(() => {
    setRoute(pathname);
  }, [pathname]);

  return (
    <div>
      <header className="w-full">
        <h1 className="text-xl font-bold text-center">Flow Hydration</h1>
        <nav className="mt-4 w-full">
          <ul className="w-full flex space-x-4 justify-around">
            <li>
              <Link
                href="/"
                className={`p-2 rounded ${route === "/" ? "bg-black text-white" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`p-2 rounded ${route === "/about" ? "bg-black text-white" : ""}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact-details"
                className={`p-2 rounded ${route === "/contact-details" ? "bg-black text-white" : ""}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
