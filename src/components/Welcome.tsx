import Welcome_Image from "../assets/Famassa-5_1.jpg";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <div className="bg-[#410101] px-10 lg:px-20 py-20">
      <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
        <img
          src={Welcome_Image}
          alt="welcome image"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="space-y-5 text-center lg:text-left"
        >
          <h2 className="text-3xl  md:text-4xl text-red-300 font-light">
            Welcome
          </h2>
          <p className="text-white lg:text-justify max-w-lg ">
            Welcome to JAT Photography, where your love story becomes a
            masterpiece. We make sure the magic of your day shines—without your
            Aunty's iPhone taking center stage. From grand moments to tiny
            details and all the laughter in between, we capture it all. Your
            day, your energy, your story—told your way.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;
