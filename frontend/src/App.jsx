import { useState } from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
// import Courses from "./course/Courses";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className={`${darkMode ? "bg-black" : ""}`}>
        <Routes>
          <Route
            path="/"
            element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
          {/* <Route
            path="/courses"
            element={<Courses darkMode={darkMode} setDarkMode={setDarkMode} />}
          /> */}
        </Routes>
      </div>
    </>
  );
};

export default App;
