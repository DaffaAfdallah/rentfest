import React from "react";
import { useNavigate } from "react-router-dom";
import perpisahanImage from "../assets/images/perpisahan.jpg"; 
import konserImage from "../assets/images/konser.jpg";
import musikImage from "../assets/images/alatmusik.jpg";

const PaketAcara = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Ingin Hemat Budget?</h1>
        <p className="text-xl">Pakai Paket Acara Diskon s/d 30%</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          className="border rounded-lg p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow duration-300"
          onClick={() => navigate("/perpisahan")}
        >
          <img src={perpisahanImage} alt="Perpisahan" className="mb-4 rounded-lg" />
          <p className="text-lg font-semibold">PERPISAHAN</p>
          <button className="bg-purple-600 text-white mt-4 py-2 px-6 rounded hover:bg-purple-700">
            Kirim
          </button>
        </div>
        <div
          className="border rounded-lg p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow duration-300"
          onClick={() => navigate("/konser")}
        >
          <img src={konserImage} alt="Konser" className="mb-4 rounded-lg" />
          <p className="text-lg font-semibold">KONSER</p>
          <button className="bg-purple-600 text-white mt-4 py-2 px-6 rounded hover:bg-purple-700">
            Kirim
          </button>
        </div>
        <div
          className="border rounded-lg p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow duration-300"
          onClick={() => navigate("/musik")}
        >
          <img src={musikImage} alt="Musik" className="mb-4 rounded-lg" />
          <p className="text-lg font-semibold">MUSIK</p>
          <button className="bg-purple-600 text-white mt-4 py-2 px-6 rounded hover:bg-purple-700">
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaketAcara;