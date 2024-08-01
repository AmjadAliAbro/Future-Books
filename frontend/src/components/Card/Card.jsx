import "./Card.css";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../../../public/list.json";

const Card = ({ darkMode }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const filteredData = list.filter((data) => data.category === "Free");

  return (
    <div className={`slider-container ${darkMode ? "dark-mode" : ""}`}>
      <Slider {...settings}>
        {filteredData.map((item) => (
          <div key={item.id} className="slider-card !flex justify-center">
            <div className="w-64 xl:w-80 pb-8 flex flex-col shadow-lg rounded-md">
              <img src={item.image} alt="" className="w-80 h-96 rounded-t-md" />
              <div
                className={`${
                  darkMode ? "!bg-[#141414] text-white " : "bg-[#ffffff]"
                } rounded-b-md px-4 py-6 h-40 justify-center flex flex-col`}
              >
                <h1 className="text-md font-bold flex items-center gap-2">
                  {item.name}
                  <span className="text-xs bg-pink-600 text-white rounded-full px-3 py-1">
                    {item.category}
                  </span>
                </h1>
                <p className="text-xs">{item.description}</p>
                <div className="flex text-xs justify-between pt-2">
                  <span className="border border-slate-600 rounded-full px-2">
                    ${item.price}
                  </span>
                  <a className="border border-slate-600 rounded-full px-2 cursor-pointer hover:bg-pink-500 hover:text-white hover:border-slate-600 transition-all ease-in-out duration-300">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

Card.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Card;
