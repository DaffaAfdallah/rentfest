import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavbarComp from './components/NavbarComp';
import FooterComp from './components/FooterComp';
import Beranda from './pages/Beranda';
import Tentang from './pages/Tentang';
import Fitur from './pages/Fitur';
import Masuk from './pages/Masuk';
import Daftar from './pages/Daftar';
import Deskripsi from './pages/Deskripsi';

const App = () => {
  const location = useLocation();
  const masukPage = location.pathname === '/masuk';
  const daftarPage = location.pathname === '/daftar';

  return (
    <div className="flex flex-col min-h-screen">
      {!masukPage && <NavbarComp />}
      {!daftarPage && <NavbarComp />}
      <div className={`flex-grow ${!masukPage, daftarPage ? 'mt-20' : ''}`}>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/fitur" element={<Fitur />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/masuk" element={<Masuk />} />
          <Route path="/daftar" element={<Daftar />} />
          <Route path="/deskripsi/:id" element={<Deskripsi />} />
        </Routes>
      </div>
      {!masukPage && <FooterComp />}
      {!daftarPage && <FooterComp />}
    </div>
  );
};

export default App;
