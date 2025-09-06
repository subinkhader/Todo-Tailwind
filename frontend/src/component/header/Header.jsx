import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

// import { useLocation } from "react-router-dom";

const Header = () => {
  const token = localStorage.getItem("token");
  const [menuOpen, setMenuOpen] = useState(false);
  // const location = useLocation();

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  // const getPageTitle = () => {
  //   switch (location.pathname) {
  //     case "/login":
  //       return "Login Page";
  //     case "/signup":
  //       return "Signup Page";
  //     case "/":
  //       return "Todo List Page";
  //     default:
  //       return "Todo List Page";
  //   }
  // };
  return (
    <header className="bg-green-950 fixed w-full top-0 left-0 z-50">
      <nav className="container flex items-center justify-between h-16 sm:h-20">
        <div className="font-Lobster sm:text-2xl">Todo List Page</div>

        {/* Menu */}
        <div
          id="nav-menu"
          className={`absolute top-0 ${
            menuOpen ? "left-0" : "left-[100%]"
          } min-h-[80vh] w-full bg-green-950/80 backdrop-blur-sm flex items-center justify-center duration-300 overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:w-auto`}
        >
          {token ? (
            <>
              <ul className="flex flex-col items-center gap-8 lg:flex-row">
                <li>
                  <Link
                    to={"/dashboard"}
                    className="nav-link"
                    onClick={handleCloseMenu}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/register"}
                    className="nav-link"
                    onClick={handleCloseMenu}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul className="flex flex-col items-center gap-8 lg:flex-row">
                <li>
                  <Link
                    to={"/login"}
                    className="nav-link"
                    onClick={handleCloseMenu}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/register"}
                    className="nav-link"
                    onClick={handleCloseMenu}
                  >
                    register
                  </Link>
                </li>
              </ul>
            </>
          )}
        </div>

        {/* Toggle Button */}
        <div
          id="hamburger"
          className="text-2xl sm:text-3xl cursor-pointer z-50 lg:hidden"
          onClick={handleToggleMenu}
        >
          {menuOpen ? <IoMdClose /> : <CiMenuBurger />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
