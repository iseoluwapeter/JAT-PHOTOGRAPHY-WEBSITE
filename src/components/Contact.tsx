
import { assets } from "../assets/assests";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import "react-toastify/dist/ReactToastify.css";
import FormDetails from "./FormDetais"

const Contact = () => {
  

  return (
    <div
      className="relative bg-cover bg-no-repeat bg-center py-20 px-10 md:px-20 flex flex-col-reverse md:flex-row items-center gap-20 md:gap-30"
      style={{ backgroundImage: `url(${assets.backgroundImg})` }} //
    >
      

      <FormDetails/>
      

      <div className="text-white space-y-3">
        <p className="text_2 text-3xl md:text-6xl  text-center md:text-left">
          {" "}
          Contact Us
        </p>
        <p className="text-lg">info@jatphotography.com</p>
        <div className="text-white text-2xl md:text-4xl flex gap-7 pt-10 ">
          <AiFillInstagram />
          <FaXTwitter />
          <FaFacebook />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default Contact;
