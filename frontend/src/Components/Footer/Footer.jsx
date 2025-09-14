import { Link } from "react-router-dom";
import {
  copyrightText,
  helpMateLogo,
  helpMateLogoText,
} from "../../Constants/Constants";
import { getCurrentYear } from "../../utils/dateUtils";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-6  ">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <div className="flex-shrink-0 cursor-pointer">
            <img
              src={helpMateLogo}
              alt={helpMateLogoText}
              className="h-12 w-auto"
            />
          </div>

          <ul className="flex flex-row gap-4 ">
            <li>
              <Link to="/" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gray-300 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-gray-300 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-gray-300 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="text-center max-w-sm">
            <h3 className="text-xl font-semibold mb-2">
              Subscribe to our Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Get the latest news, articles, and resources delivered straight to
              your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row items-center gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 px-4 py-2 rounded-md text-black focus:outline-none bg-white"
                required
              />
              <button
                type="submit"
                className="bg-[#c718c5] hover:bg-white hover:text-black px-6 py-2 rounded-md text-white transition-colors w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 text-center text-sm text-gray-400">
          © {getCurrentYear} {copyrightText}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
