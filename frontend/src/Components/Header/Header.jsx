import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import {
  helpMateLogo,
  scrollThreshold,
  helpMateLogoText,
} from "../../Constants/Constants";
import "../../../src/index.css";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

const Header = ({ onLogoutClick }) => {
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState(null);

  const handleAvatarClick = (event) => {
    setProfileMenuAnchorEl(event.currentTarget);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= scrollThreshold) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`shadow-md bg-gradient-to-r from-green-400 to-blue-400 z-10 text-white duration-500 ease-in ${
        isScroll ? "sticky top-0" : " "
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 cursor-pointer">
            <img
              src={helpMateLogo}
              alt={helpMateLogoText}
              className="h-10 w-auto"
            />
          </div>

          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="about" className="hover:text-gray-300">
              About
            </Link>
            <Link to="services" className="hover:text-gray-300">
              Service
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center">
                <IconButton
                  onClick={handleAvatarClick}
                  size="small"
                  sx={{ ml: 2 }}
                >
                  <Avatar
                    alt="User"
                    src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                  />
                </IconButton>
                <ProfileMenu
                  onLogoutClick={onLogoutClick}
                  profileMenuAnchorEl={profileMenuAnchorEl}
                  setProfileMenuAnchorEl={setProfileMenuAnchorEl}
                />
              </div>
            ) : (
              <div>
                <Link to="signup" className="m-2 hover:text-gray-300">
                  Signup
                </Link>
                <Link to="login" className="hover:text-gray-300">
                  Login
                </Link>
              </div>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-2xl focus:outline-none"
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-black">
          <Link to="#/" className="block hover:text-gray-300">
            Home
          </Link>
          <Link to="about" className="block hover:text-gray-300">
            About
          </Link>
          <Link to="services" className="block hover:text-gray-300">
            Services
          </Link>
          <Link to="contact" className="block hover:text-gray-300">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
