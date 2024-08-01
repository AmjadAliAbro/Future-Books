import PropTypes from "prop-types";
import Course from "./Course";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import list from "../../public/list.json";

const Courses = ({ darkMode, setDarkMode }) => {
  const filteredData = list.filter((item) => item.category !== "Free");
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="min-h-screen">
        <Course filteredData={filteredData} />
      </div>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

Courses.propTypes = {
  darkMode: PropTypes.bool?.isRequired,
  setDarkMode: PropTypes.func?.isRequired,
};

export default Courses;
