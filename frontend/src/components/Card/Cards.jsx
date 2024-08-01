import PropTypes from "prop-types";
import "./Card.css";

const Cards = ({ item, darkMode }) => {
  return (
    <div key={item.id} className="slider-card !flex justify-center">
      <div className="w-64 xl:w-80 pb-8 flex flex-col shadow-lg rounded-md hover:scale-105 duration-300">
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
            <a className="border border-slate-600 rounded-full px-2 cursor-pointer hover:bg-pink-500 hover:text-white hover:border-slate-600 hover:scale-110 transition-all ease-in-out duration-300">
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default Cards;
