import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <header className="w-full">
        <h1 className="text-xl font-bold text-center">Flow App</h1>
        <nav className="mt-2 w-full">
          <ul className="w-full flex space-x-4 justify-around">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact-details" className="hover:underline">
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
