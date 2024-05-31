import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/rf-logo.svg';

const NavbarComp = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <nav className={`fixed top-0 w-full p-4 transition-all duration-300 z-50 ${scrolled ? 'bg-[#eaeaea] shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center" onClick={handleLogoClick}>
          <img src={logo} alt="Logo" className="h-12 cursor-pointer" />
        </div>
        <div className="flex items-center text-lg space-x-8">
          <Link to="/">Beranda</Link>
          <Link to="/tentang">Tentang</Link>
          <Link to="/fitur">Fitur</Link>
          <button className="px-8 py-2 text-[#f5f5f5] rounded-lg">Masuk</button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComp;