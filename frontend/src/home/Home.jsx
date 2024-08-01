import PropTypes from "prop-types";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import FreeBook from "../components/FreeBook";
import Navbar from "../components/Navbar";

const Home = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Banner darkMode={darkMode} setDarkMode={setDarkMode} />
      <FreeBook darkMode={darkMode} setDarkMode={setDarkMode} />
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

Home.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default Home;
