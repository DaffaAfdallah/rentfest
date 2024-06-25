import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import produk1 from "../assets/images/fitur/produk1.png";
import produk2 from "../assets/images/fitur/produk2.png";
import produk3 from "../assets/images/fitur/produk3.png";
import produk4 from "../assets/images/fitur/produk4.png";
import produk5 from "../assets/images/fitur/produk5.png";
import produk6 from "../assets/images/fitur/produk6.png";
import produk7 from "../assets/images/fitur/produk7.png";

const productData = [
  {
    id: 1,
    images: [produk1, produk1, produk1],
    name: "Wireless Headphones",
    price: "100000",
    description: "Deskripsi untuk Wireless Headphones",
  },
  {
    id: 2,
    images: [produk2, produk2, produk2],
    name: "Sony Camera",
    price: "190000",
    description: "Deskripsi untuk Sony Camera",
  },
  {
    id: 3,
    images: [produk3, produk3, produk3],
    name: "Noise Cancelling Headphones",
    price: "150000",
    description: "Deskripsi untuk Noise Cancelling Headphones",
  },
  {
    id: 4,
    images: [produk4, produk4, produk4],
    name: "SoundCard",
    price: "200000",
    description: "Deskripsi untuk SoundCard",
  },
  {
    id: 5,
    images: [produk5, produk5, produk5],
    name: "Logitech Gaming Speaker",
    price: "120000",
    description: "Deskripsi untuk Logitech Gaming Speaker",
  },
  {
    id: 6,
    images: [produk6, produk6, produk6],
    name: "Speaker Bluetooth",
    price: "50000",
    description: "Deskripsi untuk Speaker Bluetooth",
  },
  {
    id: 7,
    images: [produk7, produk7, produk7],
    name: "Bluetooth Speaker",
    price: "250000",
    description: "Deskripsi untuk Bluetooth Speaker",
  },
  {
    id: 8,
    images: [produk3, produk3, produk3],
    name: "Action Camera",
    price: "250000",
    description: "Deskripsi untuk Action Camera",
  },
  {
    id: 9,
    images: [produk3, produk3, produk3],
    name: "VR Headset",
    price: "250000",
    description: "Deskripsi untuk VR Headset",
  },
  {
    id: 10,
    images: [produk3, produk3, produk3],
    name: "Fitness Tracker",
    price: "250000",
    description: "Deskripsi untuk Fitness Tracker",
  },
  {
    id: 11,
    images: [produk3, produk3, produk3],
    name: "Smart Home Hub",
    price: "300000",
    description: "Deskripsi untuk Smart Home Hub",
  },
];

const toolOptions = [
  "Wireless Headphones",
  "Sony Camera",
  "Noise Cancelling Headphones",
  "SoundCard",
  "Logitech Gaming Speaker",
  "Speaker Bluetooth",
  "Bluetooth Speaker",
  "Action Camera",
  "VR Headset",
  "Fitness Tracker",
  "Smart Home Hub",
];

const RekomendasiAlat = () => {
  const [minAnggaran, setMinAnggaran] = useState("");
  const [maxAnggaran, setMaxAnggaran] = useState("");
  const [alat, setAlat] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const filtered = productData.filter((item) => {
      const price = parseInt(item.price);
      const minPrice = parseInt(minAnggaran.replace(/\D/g, "")) || 0;
      const maxPrice = parseInt(maxAnggaran.replace(/\D/g, "")) || Infinity;
      return (
        price >= minPrice &&
        price <= maxPrice &&
        (!alat || item.name.toLowerCase().includes(alat.toLowerCase()))
      );
    });
    setFilteredProducts(filtered);
  };

  const handleSewaSekarang = (id) => {
    navigate(`/deskripsi/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-[#1b1a55]">
          Rekomendasi Alat
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Daripada bingung cari alatnya, mending sini kita bantu untuk mencari
        </p>
        <p className="text-center text-gray-600 mb-6">
          alat yang cocok dengan acaramu.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="minAnggaran" className="block text-gray-600">
              Anggaran Minimum
            </label>
            <input
              id="minAnggaran"
              name="minAnggaran"
              type="text"
              placeholder="masukkan anggaran minimum"
              value={minAnggaran}
              onChange={(e) => setMinAnggaran(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#1b1a55] focus:border-[#1b1a55]"
            />
          </div>
          <div>
            <label htmlFor="maxAnggaran" className="block text-gray-600">
              Anggaran Maksimum
            </label>
            <input
              id="maxAnggaran"
              name="maxAnggaran"
              type="text"
              placeholder="masukkan anggaran maksimum"
              value={maxAnggaran}
              onChange={(e) => setMaxAnggaran(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#1b1a55] focus:border-[#1b1a55]"
            />
          </div>
          <div>
            <label htmlFor="alat" className="block text-gray-600">
              Alat Yang Dibutuhkan
            </label>
            <select
              id="alat"
              name="alat"
              value={alat}
              onChange={(e) => setAlat(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#1b1a55] focus:border-[#1b1a55]"
            >
              <option value="" disabled>
                Pilih alat
              </option>
              {toolOptions.map((tool, index) => (
                <option key={index} value={tool}>
                  {tool}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-[#1b1a55] text-white py-2 px-4 rounded hover:bg-[#9290c3] duration-300"
            >
              Cari Rekomendasi
            </button>
            <button
              type="button"
              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 duration-300"
              onClick={() => navigate('/beranda')}
            >
              Kembali
            </button>
          </div>
        </form>

        {filteredProducts.length > 0 && (
          <div className="mt-8 overflow-y-auto max-h-80">
            <h3 className="text-xl font-bold text-center text-[#1b1a55] mb-4">
              Hasil Pencarian
            </h3>
            <div className="space-y-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col md:flex-row items-center bg-white p-4 rounded shadow-md"
                >
                  <div className="w-full md:w-1/2 pr-0 md:pr-6">
                    <Carousel
                      showThumbs={false}
                      showStatus={false}
                      className="rounded-lg"
                    >
                      {product.images.map((image, index) => (
                        <div
                          key={index}
                          className="flex justify-center items-center bg-gray-200 rounded-lg"
                        >
                          <img
                            src={image}
                            alt={`${product.name} ${index + 1}`}
                            className="rounded-lg"
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                  <div className="w-full md:w-1/2 pl-0 md:pl-6 mt-4 md:mt-0">
                    <h4 className="text-2xl font-bold mb-2">{product.name}</h4>
                    <p className="text-lg mb-2">
                      Rp. {product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </p>
                    <p className="text-base mb-2">{product.description}</p>
                    <button
                      className="bg-[#1b1a55] text-white py-2 px-4 rounded hover:bg-[#9290c3] duration-300"
                      onClick={() => handleSewaSekarang(product.id)}
                    >
                      Sewa Sekarang
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RekomendasiAlat;
