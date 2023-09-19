import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import cv from "../assets/cv.pdf";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex flex-col gap-2">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}>
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex ">
              Alexander &nbsp;
              <span className="xs:block hidden"> | Frontend Developer</span>
            </p>
          </Link>
          <div className="flex justify-center  gap-5">
            <a href="https://github.com/alexander21r" target="_blank">
              <AiFillGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/alexander-rasoli-157888218/"
              target="_blank">
              <AiFillLinkedin size={30} />
            </a>
          </div>
        </div>

        <ul className="list-none hidden 2xl:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}>
              <a
                href={`${nav.id === "CV" ? cv : "#" + nav.id}`}
                download={nav.id === "CV" && cv}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="2xl:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}>
                  <a
                    href={`${nav.id === "CV" ? cv : "#" + nav.id}`}
                    download={nav.id === "CV" && cv}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
