import { assets } from "../assets/assests";

const OurPartners = () => {
  return (
    <div className="py-10 mx-auto px-4 md:px-20">
      <h2 className="text-center py-5 text-2xl font-bold">OUR PARTNERS</h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
        <img
          src={assets.Partner1}
          alt="Partner 1"
          className="w-32 object-contain"
        />
        <img
          src={assets.Partner4}
          alt="Partner 4"
          className="w-32 object-contain"
        />
        <img
          src={assets.Partner6}
          alt="Partner 6"
          className="w-32 object-contain"
        />
        <img
          src={assets.Partner7}
          alt="Partner 7"
          className="w-32 object-contain"
        />
      </div>
    </div>
  );
};

export default OurPartners;
