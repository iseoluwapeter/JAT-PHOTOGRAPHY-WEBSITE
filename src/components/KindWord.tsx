import { WordDetails } from "./KindWordDetails";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Number of slides visible at a time
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


const KindWord = () => {
  return (
    <div className="p-20">
      <p className="text-center pb-10">KIND WORDS</p>

      <Slider {...settings}>
        {WordDetails.map((kind) => (
          <div
            key={kind.id}
            className="text-center space-y-3 text-gray-500 font-normal text-sm p-5"
          >
            <img
              src={kind.image}
              alt="client_image"
              className="w-30 h-30 object-cover rounded-full mx-auto"
            />
            <p className="italic ">{kind.word}</p>
            <p className="font-semibold">{kind.client}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default KindWord;
