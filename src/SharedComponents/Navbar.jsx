import { Link, NavLink } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import "../Styles/Button.css";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = (
    <>
      {/* home  */}
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          ` ${
            isPending
              ? "pending"
              : isActive
              ? "text-[#991e14] active"
              : "bg-black bg-clip-text text-transparent hover:text-[#991e14] "
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/service"
        className={({ isActive, isPending }) =>
          ` ${
            isPending
              ? "pending"
              : isActive
              ? "text-[#991e14] active"
              : "bg-black bg-clip-text text-transparent hover:text-[#991e14] "
          }`
        }
      >
        Service
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          ` ${
            isPending
              ? "pending"
              : isActive
              ? "text-[#991e14] active"
              : "bg-black bg-clip-text text-transparent hover:text-[#991e14] "
          }`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/qna"
        className={({ isActive, isPending }) =>
          ` ${
            isPending
              ? "pending"
              : isActive
              ? "text-[#991e14] active"
              : "bg-black bg-clip-text text-transparent hover:text-[#991e14] "
          }`
        }
      >
        Q&N
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          `${
            isPending
              ? "pending"
              : isActive
              ? "text-[#991e14] active"
              : "bg-black bg-clip-text text-transparent hover:text-[#991e14] "
          }`
        }
      >
        Contact
      </NavLink>
    </>
  );

  return (
    <div className="relative flex justify-center items-center">
      <Link to={"/"}>
        <div className="">logo</div>
      </Link>
      <div className="flex grow flex-col justify-center items-center">
        <div className="bg-[#2a2d34] h-4 w-full"></div>
        {/* nav buttons for sm:flex  */}
        <div className="w-full hidden sm:flex justify-between items-center p-1">
          <div className="flex">
            <ul className="flex justify-center items-center gap-3 font-medium text-base">
              {navLinks}
            </ul>
          </div>
          <div>
            <button className="myBtn hover:myBtn focus:myBtn">
              <div className="flex justify-center items-center gap-2">
                <IoCall />
                <div className="text-base">07898232710</div>
              </div>
            </button>
          </div>
        </div>

        {/* dropdown menu for nav buttons for small screen */}
        <div className="w-full flex justify-end items-end p-2 sm:hidden">
          <button
            onClick={toggleDropdown}
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="myBtn2 absolute z-30"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  /* Path to create an 'X' shape */
                  d="M1 1l15 12M1 13L16 1"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
        </div>

        {/* todo: transition effect should not take space  */}

        <div
          className={` w-full absolute z-20 top-0 left-0 transition-transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{
            transitionDuration: "0.3s",
          }}
          id="navbar-hamburger"
        >
          <ul
            onClick={toggleDropdown}
            className="flex flex-col font-medium px-4 pt-12 pb-4 gap-4 bg-gray-50 text-xl"
          >
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
