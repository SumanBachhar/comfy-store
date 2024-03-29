import { NavLink } from "react-router-dom";
import { NavLinks } from "./NavLinks";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { useEffect, useState } from "react";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

const getThemeFromLocalstorage = () => {
  localStorage.getItem("theme") || themes.winter;
};

export const Navbar = () => {
  const [theme, setTheme] = useState(getThemeFromLocalstorage);
  const handleTheme = () => {
    const { winter, dracula } = themes;
    const newTheme = theme === winter ? dracula : winter;
    document.documentElement.setAttribute("data-theme", theme);
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <nav className="bg-base-200">
        <div className="navbar align-element">
          <div className="navbar-start">
            <NavLink
              to="/"
              className="hidden lg:flex btn btn-primary text-3xl items-center"
            >
              C
            </NavLink>
            {/* Dropdown */}
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <FaBarsStaggered className="h-6 w-6" />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
              >
                <NavLinks />
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal">
              <NavLinks />
            </ul>
          </div>
          <div className="navbar-end">
            {/* Theme setUp */}
            <label className="swap swap-rotate">
              <input type="checkbox" onChange={handleTheme} />
              {/* sun icon*/}
              <BsSunFill className="swap-on h-4 w-4" />
              {/* moon icon*/}
              <BsMoonFill className="swap-off h-4 w-4" />
            </label>

            {/* Cart link */}
            <NavLink
              to="/cart"
              className="btn btn-ghost btn-circle btn-md ml-4"
            >
              <div className="indicator">
                <BsCart3 className="h-6 w-6" />
                <span className="badge badge-sm badge-primary indicator-item">
                  0
                </span>
              </div>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};
