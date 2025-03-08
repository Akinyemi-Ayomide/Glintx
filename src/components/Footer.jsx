import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { IoLogoTiktok } from 'react-icons/io5';
const Footer = () => {
  return (
    <footer className="border-t-white text-white text-center py-6">
      <div className="container mx-auto px-4">
        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mb-4">
          <Link to="/">
            <FaFacebookF />
          </Link>
          <Link to="https://www.instagram.com/glintxworthinternational?igsh=MXFnN2g3M3FrNDIwbQ%3D%3D&utm_source=qr">
            <FaInstagram />
          </Link>
          <Link to="/">
            <IoLogoTiktok />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm md:text-base">
          &copy; 2024 Glintx Worth International. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
