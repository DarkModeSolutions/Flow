import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-1 text-white">
      <div className="flex justify-between items-center">
        <div>Logo here</div>
        <Link className="hover:underline" href="/">
          Home
        </Link>
        <Link className="hover:underline" href="/contact-details">
          Contact Details
        </Link>
        <Link className="hover:underline" href="/terms-and-conditions">
          Terms and Conditions
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center text-[10px] mt-2">
        <p className="text-gray-300">
          © {new Date().getFullYear()} <b>Flow</b> by{" "}
          <b>
            <u>Dark Mode Solutions</u>
          </b>
          .
        </p>
        <p>Crafted with passion for seamless experiences.</p>
      </div>
    </div>
  );
};

export default Footer;
