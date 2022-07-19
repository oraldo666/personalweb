import React, { useEffect } from "react";
import "./NavBarStyle.css";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { menuActions } from "../../services/reduxslice/menustate/menuSlice";
import { useDispatch } from "react-redux";

const NavBarComponent = () => {
  // const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();

  const menuState = useSelector((state) => state.menuState.state);

  const openCloseMenu = () => {
    dispatch(menuActions.toggleMenu(!menuState));
  };

  return (
    <div className="navbar-container">
      <a href="#">
        <AiOutlineMenuFold
          className={
            menuState
              ? "nav-menu-icon slide-from-right"
              : "nav-menu-icon slide-back-in"
          }
          // onClick={() => setOpenMenu(!openMenu)}
          onClick={openCloseMenu}
        />
      </a>

      <div
        className={
          menuState
            ? "nav-link-sm-container slide-from-right-container"
            : "nav-link-sm-container slide-back-in-container"
        }
        onClick={openCloseMenu}
      ></div>

      <Link
        to="/"
        className={
          menuState
            ? "nav-menu-home slide-from-right-home"
            : "nav-menu-home slide-back-in-home"
        }
      >
        Home
      </Link>
      <Link
        to="/blog"
        className={
          menuState
            ? "nav-menu-blog slide-from-right-blog"
            : "nav-menu-blog slide-back-in-blog"
        }
      >
        Blog
      </Link>
      <Link
        to="/about"
        className={
          menuState
            ? "nav-menu-about slide-from-right-about"
            : "nav-menu-about slide-back-in-about"
        }
      >
        About
      </Link>
      <Link
        to="/projects"
        className={
          menuState
            ? "nav-menu-projects slide-from-right-projects"
            : "nav-menu-projects slide-back-in-projects"
        }
      >
        Projects
      </Link>
    </div>
  );
};

export default NavBarComponent;
