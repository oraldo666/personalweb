// import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

import NavBarComponent from "./layout/navbar/NavBarComponent";
// import ScrollDown from "./components/scrolldownicon/ScrollDown";

import HomePage from "./pages/homepage/HomePage";
import AboutPage from "./pages/aboutpage/AboutPage";
import BlogPage from "./pages/blogpage/BlogPage";
import ProjectsPage from "./pages/projectspage/ProjectsPage";
import SingleBlogPage from "./pages/singleblogpage/SingleBlogPage";

import { useSelector } from "react-redux";
import { menuActions } from "./services/reduxslice/menustate/menuSlice";
import { useDispatch } from "react-redux";

function App() {
  // const [scrollDown, setScrollDown] = useState(false);
  const dispatch = useDispatch();
  const menuState = useSelector((state) => state.menuState.state);
  const openCloseMenu = () => {
    if (menuState === true) {
      dispatch(menuActions.toggleMenu(!menuState));
    }
  };
  // const mainContainer = useRef();

  // useEffect(() => {
  //   let windowHeight = mainContainer.current.clientHeight;

  //   let scrollContainer = windowHeight > window.innerHeight + 20;
  //   console.log(scrollContainer);
  //   setScrollDown(scrollContainer);
  // });

  return (
    <div className="main-container">
      <Router>
        <NavBarComponent />
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
        <div onClick={openCloseMenu}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about/" element={<AboutPage />} />
            <Route path="/blog/" element={<BlogPage />} />
            <Route path="/projects/" element={<ProjectsPage />} />
            <Route path="/blog/:id/" element={<SingleBlogPage />} />
          </Routes>
        </div>
        {/* {scrollDown && <ScrollDown />} */}
      </Router>
    </div>
  );
}

export default App;
