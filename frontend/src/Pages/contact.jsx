import React from "react";
import { TextField, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Heading from "../Components/Heading/Heading";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6"></h2>
          <Heading title="Get in Touch" className="text-left" />
          <p className="text-gray-600 text-lg">
            Have questions or need support? We’d love to hear from you. Reach
            out and our team will get back to you as soon as possible.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <EmailIcon className="purpleColorText" />
              <span className="text-gray-700">support@helpmate.com</span>
            </div>
            <div className="flex items-center gap-4">
              <PhoneIcon className="purpleColorText" />
              <span className="text-gray-700">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-4">
              <LocationOnIcon className="purpleColorText" />
              <span className="text-gray-700">
                123 Main Street, San Francisco, CA
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Send us a Message
          </h3>
          <form className="space-y-6 flex gap-3 flex-col">
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              className="bg-white"
            />
            <TextField
              fullWidth
              label="Your Email"
              type="email"
              variant="outlined"
              className="bg-white"
            />
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              className="bg-white"
            />
            <button className="p-3 mt-3 rounded-lg purpleColorBg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
