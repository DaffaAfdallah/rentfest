import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import produk3 from '../assets/images/fitur/produk3.png';

const productData = [
  { id: 1, images: [produk3, produk3, produk3], name: 'Wireless Headphones', price: 'Rp. 100.000,- / hari', description: 'Deskripsi untuk Wireless Headphones' },
  { id: 2, images: [produk3, produk3, produk3], name: 'Sony Camera', price: 'Rp. 190.000,- / hari', description: 'Deskripsi untuk Sony Camera' },
  { id: 3, images: [produk3, produk3, produk3], name: 'Logitech Speaker', price: 'Rp. 150.000,- / hari', description: 'Deskripsi untuk Logitech Speaker' },
  { id: 4, images: [produk3, produk3, produk3], name: 'Gaming Mouse', price: 'Rp. 80.000,- / hari', description: 'Deskripsi untuk Gaming Mouse' },
  { id: 5, images: [produk3, produk3, produk3], name: 'Drone', price: 'Rp. 120.000,- / hari', description: 'Deskripsi untuk Drone' },
  { id: 6, images: [produk3, produk3, produk3], name: 'Smart Watch', price: 'Rp. 200.000,- / hari', description: 'Deskripsi untuk Smart Watch' },
  { id: 7, images: [produk3, produk3, produk3], name: 'Bluetooth Speaker', price: 'Rp. 250.000,- / hari', description: 'Deskripsi untuk Bluetooth Speaker' },
  { id: 8, images: [produk3, produk3, produk3], name: 'Action Camera', price: 'Rp. 250.000,- / hari', description: 'Deskripsi untuk Action Camera' },
  { id: 9, images: [produk3, produk3, produk3], name: 'VR Headset', price: 'Rp. 250.000,- / hari', description: 'Deskripsi untuk VR Headset' },
  { id: 10, images: [produk3, produk3, produk3], name: 'Fitness Tracker', price: 'Rp. 250.000,- / hari', description: 'Deskripsi untuk Fitness Tracker' },
  { id: 11, images: [produk3, produk3, produk3], name: 'Smart Home Hub', price: 'Rp. 300.000,- / hari', description: 'Deskripsi untuk Smart Home Hub' },
];

const Deskripsi = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Produk tidak ditemukan</div>;
  }

  return (
    <div className="container mx-auto mt-12 p-12 flex flex-col">
        <button 
            className="w-32 border border-[#1b1a55] text-[#1b1a55] py-2 px-4 rounded hover:bg-[#1b1a55] hover:text-white duration-300"
            onClick={() => navigate(-1)}
          >
            Kembali
        </button>
    <div className="container mx-auto mb-12 py-12 flex">
      
      <div className="w-1/2 pr-6">
        <Carousel 
          showThumbs={false} 
          showStatus={false} 
          className="bg-[#252525] rounded-lg p-4"
        >
          {product.images.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <img src={image} alt={`${product.name} ${index + 1}`} className="rounded-lg" />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="w-1/2 pl-6">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-lg mb-4">{product.price}</p>
        <p className="text-base mb-4">{product.description}</p>
        <div className="flex space-x-4">

          <button className="bg-[#1b1a55] text-white py-2 px-4 rounded hover:bg-[#9290c3] duration-300">
            Sewa Sekarang
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Deskripsi;
