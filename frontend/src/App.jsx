import Home from "./home/Home";
import { useState } from "react";
import Courses from "./course/Courses";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Form/Login";
import SignUp from "./components/Form/SignUp";
import { Route, Routes } from "react-router-dom";

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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
