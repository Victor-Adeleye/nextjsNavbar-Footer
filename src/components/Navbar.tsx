"use client";

import React from "react";
import Image from "next/image";
import ultimatetopupSmlogo from "../app/ultimatetopupSmlogo.png";
import ultimatetopupLogo from "../app/ultimatetopupLogo.png";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        {/* <div>Left side</div> */}
        <Link href="/">
          <Image
            src={ultimatetopupSmlogo}
            alt="UltimateTopup Logo"
            width={205}
            height={75}
            className="cursor-pointer"
            priority
          />
        </Link>
        {/* <div>Right side</div> */}
        {/* Creating the menu */}
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/about">
              <li className="ml-10 uppercase hover:border-b hover:text-teal-400 text-xl">
                Why Us
              </li>
            </Link>
            <Link href="/services">
              <li className="ml-10 uppercase hover:border-b hover:text-teal-400 text-xl">
                Our Services
              </li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 uppercase hover:border-b hover:text-teal-400 text-xl">
                Contact Us
              </li>
            </Link>
            <Link href="/blog">
              <li className="ml-10 uppercase hover:border-b hover:text-teal-400 text-xl">
                Blog
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
        <div className="hidden sm:flex flex-row justify-around items-center pt-6 gap-3">
          <AiOutlineInstagram size={30} className="cursor-pointer" />
          <AiOutlineFacebook size={30} className="cursor-pointer" />
          <AiOutlineTwitter size={30} className="cursor-pointer" />
        </div>
      </div>

      {/* Mobile screen design */}
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        {/* Creating Mobile menu so that the Nav list can display after clicking on
        the hamburger icon for Mobile screen */}
        <div className="flex-col py-4">
          <ul>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer hover:text-teal-400"
              >
                Home
              </li>
            </Link>
            <Link href="/about">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer hover:text-teal-400"
              >
                Why Us
              </li>
            </Link>
            <Link href="/service">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer hover:text-teal-400"
              >
                Our services
              </li>
            </Link>
            <Link href="/contact">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer hover:text-teal-400"
              >
                Contact
              </li>
            </Link>
            <Link href="/blog">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer hover:text-teal-400"
              >
                Blog
              </li>
            </Link>
          </ul>
        </div>
        {/* Adding social handles */}
        <div className="flex flex-row justify-around items-center pt-6">
          <AiOutlineInstagram size={30} className="cursor-pointer" />
          <AiOutlineFacebook size={30} className="cursor-pointer" />
          <AiOutlineTwitter size={30} className="cursor-pointer" />
        </div>

        {/* Adding logo */}
        <Link href="/">
          <Image
            src={ultimatetopupLogo}
            alt="UltimateTopup Logo"
            width={205}
            height={75}
            className="cursor-pointer pt-4"
            priority
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
