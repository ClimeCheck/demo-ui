/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Logo } from "../../assets/images";
import Link from "next/link";
const Navbar = () => {
  const navRef = useRef();
  const headerRef = useRef();

  const onToggleMenu = (e) => {
    //what is this line supposed to do?

    // check if the element has the class -translate-x-full
    if (
      navRef.current.classList.contains("-translate-x-full") ||
      !navRef.current.classList.contains("translate-x-0")
    ) {
      // remove the class -translate-x-full
      headerRef.current.classList.remove("bg-transparent");
      navRef.current.classList.remove("-translate-x-full");
      // add the class translate-x-0
      navRef.current.classList.add("translate-x-0");
      headerRef.current.classList.add("bg-white");
    } else {
      // remove the class translate-x-0
      navRef.current.classList.remove("translate-x-0");
      // add the class -translate-x-full
      navRef.current.classList.add("-translate-x-full");
      headerRef.current.classList.remove("bg-white");

      headerRef.current.classList.add("bg-transparent");
    }
  };
  return (
    <div
      ref={headerRef}
      className="flex  justify-between py-8 w-full px-[3rem] bg-transparent relative md:bg-transparent"
    >
      <div className="w-32 ">
        <img src={Logo.src} alt="" className=" object-cover  w-full" />
      </div>

      <nav className="hidden md:flex justify-center gap-x-6 items-center text-white mx-auto">
        <Link href="/" className="hover:text-primary">
          Contribute
        </Link>
        <Link href="/map" className="hover:text-primary">
          Explorer
        </Link>
        <Link href="/#story" className="hover:text-primary">
          FAQs
        </Link>
      </nav>
      <div className=" hidden md:flex justify-center items-center gap-x-6 text-white">
        <Link href="/" className="hover:text-primary">
          <button>Sign Up</button>
        </Link>

        <Link href="/" className="p-4 bg-primary rounded">
          <button>Login</button>
        </Link>
      </div>

      <GiHamburgerMenu
        onClick={(e) => onToggleMenu(e)}
        name="menu"
        className="text-3xl text-primary block h-8 w-16 cursor-pointer my-auto md:hidden"
      />

      <div
        ref={navRef}
        className=" md:hidden duration-500 absolute -ml-12 bg-white h-max top-[100%] -translate-x-full text-black  w-full flex flex-col items-center p-8 gap-y-4"
      >
        <Link
          href="/"
          className="hover:text-white p-4 text-center hover:bg-primary w-full rounded"
        >
          Contribute
        </Link>
        <Link
          href="/map"
          className="hover:text-white p-4 text-center hover:bg-primary w-full rounded"
        >
          Explorer
        </Link>
        <Link
          href="/#story"
          className="hover:text-white p-4 text-center hover:bg-primary w-full rounded"
        >
          FAQs
        </Link>

        <Link
          href="/"
          className="hover:text-white p-4 text-center hover:bg-primary w-full rounded"
        >
          <button>Sign Up</button>
        </Link>

        <Link
          href="/"
          className="p-4 text-center text-white bg-primary w-full rounded"
        >
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
