import { useState } from "react";
import Home from "./home/Home";
import Courses from "./course/Courses";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Form/Login";
import SignUp from "./components/Form/SignUp";
import { Route, Routes } from "react-router-dom";
import Contact from "./contact/contact";
import About from "./about/about";

const App = () => {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <>
      <div className={`dark:bg-slate-900 dark:text-white`}>
        <Navbar darkModeHandler={darkModeHandler} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
