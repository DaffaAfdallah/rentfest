import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavbarComp from './components/NavbarComp';
import FooterComp from './components/FooterComp';
import Beranda from './pages/Beranda';
import Tentang from './pages/Tentang';
import Fitur from './pages/Fitur';
import Masuk from './pages/Masuk';
import Deskripsi from './pages/Deskripsi'; // Import Deskripsi component

const App = () => {
  return (
    <>
      <NavbarComp />
      <div className="mt-20">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/fitur" element={<Fitur />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/masuk" element={<Masuk />} />
          <Route path="/deskripsi/:id" element={<Deskripsi />} /> {/* Add Deskripsi route */}
        </Routes>
      </div>
      <FooterComp />
    </>
  );
};

export default App;
