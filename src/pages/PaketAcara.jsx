import React from "react";
import { useNavigate } from "react-router-dom";
import perpisahanImage from "../assets/images/perpisahan.jpg"; 
import konserImage from "../assets/images/konser.jpg";

const PaketAcara = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-8 pt-36">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Ingin Hemat Waktu?</h1>
        <p className="text-lg pt-4">Pakai paket acara ini yuk</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          className="border rounded-lg p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow duration-300"
          onClick={() => navigate("/perpisahan")}
        >
          <div className="w-full h-48 mb-4 overflow-hidden flex items-center justify-center">
            <img src={perpisahanImage} alt="Perpisahan" className="object-cover w-full h-full" />
          </div>
          <h3 className="text-lg font-semibold">ACARA</h3>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam animi magnam rem non, incidunt assumenda veniam tempora accusantium odit optio?</p>
          <button className="bg-purple-600 text-white mt-4 py-2 px-6 rounded hover:bg-purple-700">
            Kirim
          </button>
        </div>
        <div
          className="border rounded-lg p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow duration-300"
          onClick={() => navigate("/konser")}
        >
          <div className="w-full h-48 mb-4 overflow-hidden flex items-center justify-center">
            <img src={konserImage} alt="Konser" className="object-cover w-full h-full" />
          </div>
          <h3 className="text-lg font-semibold">KONSER</h3>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam animi magnam rem non, incidunt assumenda veniam tempora accusantium odit optio?</p>
          <button className="bg-purple-600 text-white mt-4 py-2 px-6 rounded hover:bg-purple-700">
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaketAcara;
