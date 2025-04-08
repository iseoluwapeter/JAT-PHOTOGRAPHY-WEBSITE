import { motion } from "framer-motion";
import WhyChoose_Image from "../assets/Famassa-111_1.jpg";

const WhyUs = () => {
  return (
    <div className="bg-[#410101]  px-10 md:px-20 py-20">
      <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="space-y-4 text-center lg:text-left text-white max-w-lg"
        >
          <h2 className="text-3xl md:text-4xl font-light text-red-300">
            WHY CHOOSE US?
          </h2>
          <p className="text-lg">
            Because we know exactly what needs to be done.
          </p>
          <p className="text-lg">
            We'll help you pose naturally without making you feel like you're
            trying out for a reality show.
          </p>
          <p className="text-lg">
            We truly value authentic, unscripted moments—not just staged ones.
          </p>
          <p className="text-lg">
            It’s like watching a romantic film starring you and capturing the
            perfect moments in time.
          </p>
        </motion.div>
        <img
          src={WhyChoose_Image}
          alt="Why choose us"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default WhyUs;
