import { assets } from "../assets/assests.js";
import Carousel from "./Carousel/Carousel.js";

const images = [assets.Carousel_1, assets.Carousel_2, assets.Carousel_3];
const captions = [
  "Celebrate Love",
  "Moments of  Elegance",
  "Royalty in Every Frame",
];

const Hero = () => {
  return (
    <div className="w-full">
      {/* <img src={Hero_Image} alt="" /> */}
      <Carousel images={images} captions={captions} />
    
    </div>
  );
};

export default Hero;
