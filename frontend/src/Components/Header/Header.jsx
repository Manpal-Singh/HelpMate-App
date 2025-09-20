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
import { useSelector } from "react-redux";

const Header = ({ onLogoutClick }) => {
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const handleAvatarClick = (event) => {
    setProfileMenuAnchorEl(event.currentTarget);
  };

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
      className={`shadow-md bg-black text-white z-50  ease-in ${
        isScroll ? "sticky top-0" : " "
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 cursor-pointer">
            <Link to="/">
              <img
                src={helpMateLogo}
                alt={helpMateLogoText}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          <div className="flex flex-row items-center justify-center">
            <nav className="hidden md:flex items-center justify-center space-x-6">
              {isLoggedIn && user.isAdmin && (
                <Link
                  to="admin"
                  className="bg-gradient-to-r from-[#7e22ce] to-[#db2777] px-4 py-2 rounded-lg   shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-200 inline-flex items-center justify-center "
                >
                  Admin
                </Link>
              )}
              <Link to="/" className="">
                Home
              </Link>
              <Link to="about" className="">
                About
              </Link>
              <Link to="services" className="">
                Service
              </Link>
              <Link to="contact" className="">
                Contact
              </Link>

              {!isLoggedIn && (
                <>
                  <Link
                    to="signup"
                    className="purpleColorBg px-4 py-2 rounded-lg   shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-200 inline-flex items-center justify-center"
                  >
                    Signup
                  </Link>

                  <Link
                    to="login"
                    className="purpleColorBg px-4 py-2 rounded-lg   shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-200 inline-flex items-center justify-center "
                  >
                    Login{user.isAdmin}
                  </Link>
                </>
              )}
            </nav>
            <div className="flex items-center ">
              {isLoggedIn && (
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
