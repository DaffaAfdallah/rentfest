import React from 'react';
import {FaSquareInstagram, FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";

const FooterComp = () => {
  return (
    <div className="w-full py-4 bg-[#252525] text-white text-center">
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaSquareInstagram size={24} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaSquareFacebook size={24} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaSquareXTwitter size={24} />
        </a>
      </div>
      <div>
        Copyright &copy; 2024 RentFest
      </div>
    </div>
  );
};

export default FooterComp;
