import React from 'react';
import { useParams } from 'react-router-dom';
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
  const product = productData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Produk tidak ditemukan</div>;
  }

  return (
    <div className="container mx-auto my-12 p-12 flex">
      <div className="w-1/2 pr-6">
        <Carousel showThumbs={false} showStatus={false}>
          {product.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-80 object-cover" />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="w-1/2 pl-6">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-lg mb-4">{product.price}</p>
        <p className="text-base mb-4">{product.description}</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Sewa Sekarang</button>
      </div>
    </div>
  );
};

export default Deskripsi;
