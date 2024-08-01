import PropTypes from "prop-types";
import Course from "./Course";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Courses = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="min-h-screen">
        <Course darkMode={darkMode} setDarkMode={setDarkMode} />
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
