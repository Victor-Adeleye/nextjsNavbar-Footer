"use client";

import React from "react";
import Link from "next/link";

function Navbar2() {
  return (
    <nav className="fixed w-full h-24 shadow-xl bg-gray-200 mt-24">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <div className="flex justify-between items-center">
          <Link
            href="/additional-info"
            className="ml-10 uppercase hover:border-b text-xl"
          >
            Additional Info
          </Link>
          <Link
            href="/extra"
            className="ml-10 uppercase hover:border-b text-xl"
          >
            Extra
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
