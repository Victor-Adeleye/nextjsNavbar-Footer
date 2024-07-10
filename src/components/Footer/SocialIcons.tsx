import React from "react";
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import Link from "next/link";

interface Icon {
  name: string;
  link: string;
}

interface SocialIconsProps {
  Icons: Icon[];
}

function SocialIcons({ Icons = [] }: SocialIconsProps) {
  // Provide a default value of an empty array for Icons
  return (
    <div className="text-teal-500">
      {Icons.map((icon) => {
        let IconComponent;

        // Map the icon name to the corresponding component
        switch (icon.name) {
          case "logo-facebook":
            IconComponent = IoLogoFacebook;
            break;
          case "logo-twitter":
            IconComponent = IoLogoTwitter;
            break;
          case "logo-instagram":
            IconComponent = IoLogoInstagram;
            break;

          default:
            IconComponent = null;
        }

        return IconComponent ? (
          <Link href={icon.link} key={icon.name}>
            <span
              className="p-2 cursor-pointer inline-flex items-center
              rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
              duration-300"
            >
              <IconComponent /> {/* Using the mapped icon component */}
            </span>
          </Link>
        ) : null;
      })}
    </div>
  );
}

export default SocialIcons;
