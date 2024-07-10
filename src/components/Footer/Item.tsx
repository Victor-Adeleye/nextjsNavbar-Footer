import React from "react";
import Link from "next/link";

interface LinkProps {
  name: string;
  link: string;
}

interface ItemProps {
  Links: LinkProps[];
  title: string;
}

function Item({ Links, title }: ItemProps) {
  return (
    <ul>
      <h1 className="mb-1 font-semibold">{title}</h1>
      {Links.map((Link) => (
        <li key={Link.name}>
          <a
            className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
            href={Link.link}
          >
            {Link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Item;
