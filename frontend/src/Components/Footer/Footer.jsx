import { Link } from "react-router-dom";
import {
  copyrightText,
  helpMateLogo,
  helpMateLogoText,
} from "../../Constants/Constants";
import { getCurrentYear } from "../../utils/dateUtils";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 ">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex-shrink-0 cursor-pointer">
            <img
              src={helpMateLogo}
              alt={helpMateLogoText}
              className="h-12 w-auto"
            />
          </div>
          <p className="mt-3 text-sm">
            Your trusted companion for finding reliable household services –
            from cooks and maids to plumbers and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Find a Cook</li>
            <li>Find a Maid</li>
            <li>Plumber Services</li>
            <li>Electrician Services</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm">📍 New Delhi, India</p>
          <p className="text-sm">📧 support@helpmate.com</p>
          <p className="text-sm">📞 +91 98765 43210</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t pt-5 text-center text-sm text-white-400">
        © {getCurrentYear} {copyrightText}
      </div>
    </footer>
  );
};

export default Footer;
