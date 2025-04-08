import { NavLink } from "react-router-dom";
import BrandImage from "../../assets/JATMedia Concepts.png";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";
import { navbarMenu } from "./NavMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  //   useEffect(() => {
  //     if (isOpen) {
  //       document.body.classList.add("overflow-hidden");
  //     } else {
  //       document.body.classList.remove("overflow-hidden");
  //     }
  //     return () => document.body.classList.remove("overflow-hidden");
  //   }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeIn" }}
      className="flex flex-row justify-between items-center py-4 px-5 md:px-16 sticky w-full top-0 bg-white z-30 shadow-md "
    >
      {/* brand logo */}
      <img src={BrandImage} alt="" className="w-30 md:w-50" />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-6">
        {navbarMenu.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.link}
              className="hover:text-blue-600 transition duration-300"
            >
              {item.title}
            </NavLink>
          </li>
        ))}

        {/* Social Media Links */}
        <div className="flex gap-4 text-xl">
          <AiFillInstagram className="cursor-pointer hover:text-pink-500" />
          <FaXTwitter className="cursor-pointer hover:text-blue-400" />
          <FaFacebook className="cursor-pointer hover:text-blue-600" />
        </div>
      </ul>

      {/* Hamburger Menu */}
      <div className=" md:hidden">
        {isOpen ? (
          <MdClose onClick={() => setIsOpen(false)} className="text-3xl " />
        ) : (
          <MdMenu onClick={() => setIsOpen(true)} className="text-3xl" />
        )}
        <div>
          {isOpen && (
            <div
              className="fixed top-0 left-0 w-full h-full bg-white flex flex-col z-20 justify-center items-center
            "
            >
              {/* Close Button inside the mobile menu */}
              <MdClose
                onClick={() => setIsOpen(false)}
                className="text-3xl absolute top-5 right-5 cursor-pointer"
              />
              {navbarMenu.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.link}
                  onClick={() => setIsOpen(false)}
                >
                  <li className="list-none py-4 text-xl">{item.title}</li>
                </NavLink>
              ))}
              <div className="flex gap-4 text-xl">
                <AiFillInstagram className="cursor-pointer hover:text-pink-500" />
                <FaXTwitter className="cursor-pointer hover:text-blue-400" />
                <FaFacebook className="cursor-pointer hover:text-blue-600" />
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
