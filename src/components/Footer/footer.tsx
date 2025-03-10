import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { ICONS } from "./Menus";

// Define your icons data
const icons = [
  { name: "logo-facebook", link: "https://www.facebook.com" },
  { name: "logo-twitter", link: "https://www.twitter.com" },
  { name: "logo-instagram", link: "https://www.instagram.com" },
];

function Footer() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1 className="lg:text-4xl text-3l md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-teal-400">Get</span> free business growth tips
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[]poppins rounded-md text-white md:w-auto w-full">
            Request Code
          </button>
        </div>
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2024 Ultimatetopup. All rights reserved.</span>
        <span>Terms . Privacy Policy</span>
        <SocialIcons Icons={ICONS} />
      </div>
    </div>
  );
}

export default Footer;
