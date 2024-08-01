import "./Card.css";
import Cards from "./Cards";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import list from "../../../public/list.json";
import "slick-carousel/slick/slick-theme.css";

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
          <Cards item={item} key={item.id} darkMode={darkMode} />
        ))}
      </Slider>
    </div>
  );
};

Card.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Card;
