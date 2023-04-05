/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Logo } from "../../assets/images";

import { aboutLinks, exploreLinks } from "./FooterData";

function Footer() {
  return (
    <div className="grid justify-evenly py-12 bg-black text-white  gap-14 sm:flex font-Grotesk overflow-hidden">
      <div>
        <Link href="/">
          <img src='/icon.svg' alt="logo"  className="w-full"/>
          
        </Link>
      </div>
      <div className="grid">
        <p className="font-bold text-base">Explore more</p>
        {exploreLinks.map((links, key) => {
          return (
            <Link key={key} href={links.link}>
              {links.name}
            </Link>
          );
        })}
      </div>
      <div className="grid">
        <p className="font-bold text-base">About Us</p>
        {aboutLinks.map((links, key) => {
          return (
            <Link key={key} href={links.link}>
              {links.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
