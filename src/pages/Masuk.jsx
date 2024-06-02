import React from 'react';
import { Link } from 'react-router-dom';

const Masuk = () => {
  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full max-w-sm p-6 space-y-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-[#1b1a55]">Masuk</h2>
        <p className="text-center text-gray-600">Silahkan masuk untuk melanjutkan perjalananmu bersama kami</p>
        <form className="flex flex-col gap-3">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#1b1a55] focus:border-[#1b1a55]"
            />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              required
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#1b1a55] focus:border-[#1b1a55]"
            />

          <div className="flex justify-end">
            <Link to="/lupa-password?" className="text-sm font-medium text-[#1b1a55] hover:text-[#9290c3] duration-300">
              Lupa Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-[#1b1a55] rounded-md hover:bg-[#9290c3] focus:outline-none focus:ring-2 focus:ring-[#1b1a55] focus:ring-offset-2 duration-300"
          >
            Masuk 
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Belum punya akun? <Link to="/daftar" className="font-medium text-[#1b1a55] hover:text-[#9290c3] duration-300">
          Daftar
        </Link>
        </p>

      </div>
    </div>
  );
};

export default Masuk;
