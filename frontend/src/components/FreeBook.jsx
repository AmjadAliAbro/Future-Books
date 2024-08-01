import Card from "./Card/Card";
import PropTypes from "prop-types";

const FreeBook = ({ darkMode }) => {
  return (
    <div className="mx-auto md:px-20 px-4 mb-8">
      <div className="flex flex-col gap-2">
        <h1 className={`text-2xl font-bold ${darkMode ? "text-white" : ""}`}>
          Free Offered Courses
        </h1>
        <p className={` ${darkMode ? "text-white" : ""}`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
          accusantium aspernatur possimus nostrum ea nisi voluptas harum non
          veritatis voluptates?
        </p>
      </div>
      <div className="md:mx-4 mb-4 mt-8 flex flex-wrap justify-center gap-8 rounded-md">
        <Card darkMode={darkMode} />
      </div>
    </div>
  );
};

FreeBook.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default FreeBook;
