import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IoArrowBack } from "react-icons/io5";
import produk1 from "../assets/images/fitur/produk1.png";
import produk2 from "../assets/images/fitur/produk2.png";
import produk3 from "../assets/images/fitur/produk3.png";
import produk4 from "../assets/images/fitur/produk4.png";
import produk5 from "../assets/images/fitur/produk5.png";
import produk6 from "../assets/images/fitur/produk6.png";
import produk7 from "../assets/images/fitur/produk7.png";
import produk8 from "../assets/images/fitur/produk8.png";
import produk9 from "../assets/images/fitur/produk9.png";
import produk10 from "../assets/images/fitur/produk10.png";
import produk11 from "../assets/images/fitur/produk11.png";
import produk12 from "../assets/images/fitur/produk12.png";
import produk13 from "../assets/images/fitur/produk13.png";
import produk14 from "../assets/images/fitur/produk14.png";
import produk15 from "../assets/images/fitur/produk15.png";

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
    name: "Drum Band Set",
    price: "200000",
    description: "Deskripsi untuk Drum Band Set",
  },
  {
    id: 8,
    images: [produk8, produk8, produk8],
    name: "Lampu Sorot Panggung",
    price: "150000",
    description: "Deskripsi untuk Lampu Sorot Panggung",
  },
  {
    id: 9,
    images: [produk9, produk9, produk9],
    name: "Lampu Panggung",
    price: "100000",
    description: "Deskripsi untuk Lampu Panggung",
  },
  {
    id: 10,
    images: [produk10, produk10, produk10],
    name: "Lampu Sorot",
    price: "130000",
    description: "Deskripsi untuk Lampu Sorot",
  },
  {
    id: 11,
    images: [produk11, produk11, produk11],
    name: "Kursi",
    price: "80000",
    description: "Deskripsi untuk Kursi",
  },
  {
    id: 12,
    images: [produk12, produk12, produk12],
    name: "Kamera Vidio HD",
    price: "30000",
    description: "Deskripsi untuk Kamera Vidio HD",
  },
  {
    id: 13,
    images: [produk13, produk13, produk13],
    name: "Panggung Semi Ringing",
    price: "1500000",
    description: "Deskripsi untuk Panggung Semi Ringing",
  },
  {
    id: 14,
    images: [produk14, produk14, produk14],
    name: "Panggung Full Ringing",
    price: "2500000",
    description: "Deskripsi untuk Panggung Full Ringing",
  },
  {
    id: 15,
    images: [produk15, produk15, produk15],
    name: "Panggung Lipat Portable",
    price: "1500000",
    description: "Deskripsi untuk Panggung Lipat Portable",
  },
];

const Deskripsi = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productData.find((item) => item.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <div>Produk tidak ditemukan</div>;
  }

  const handleSewaSekarang = () => {
    navigate("/sewa-alat");
  };

  return (
    <div className="container mx-auto mt-12 p-12 flex flex-col">
      <button
        className="mx-[5%] w-32 border border-[#1b1a55] text-[#1b1a55] py-2 px-4 rounded hover:bg-[#1b1a55] hover:text-white duration-300 flex items-center justify-center"
        onClick={() => navigate(-1)}
      >
        <IoArrowBack className="mr-2" />
        Kembali
      </button>
      <div className="container mx-auto mb-12 py-12 flex">
        <div className="mx-[5%] px-8 w-1/2 pr-6">
          <Carousel
            showThumbs={false}
            showStatus={false}
            className="bg-[#252525] rounded-lg p-4"
          >
            {product.images.map((image, index) => (
              <div key={index} className="flex justify-center items-center">
              <img
                src={image}
                alt={`${product.name} ${index + 1}`}
                className="rounded-lg"
              />
            </div>
            ))}
          </Carousel>
        </div>
        <div className="w-1/2 pl-6">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg mb-4">
            Rp. {product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")} / hari
          </p>
          <p className="text-base mb-4">{product.description}</p>
          <div className="flex space-x-4">
            <button
              className="bg-[#1b1a55] text-white py-2 px-4 rounded hover:bg-[#9290c3] duration-300"
              onClick={handleSewaSekarang}
            >
              Sewa Sekarang
            </button>
          </div>
        </div>
      </div>

      <section className="reviews mx-[5%] px-8">
        <h2 className="text-2xl font-bold mb-4">Semua Ulasan (461)</h2>
        <button className="write-review bg-[#1b1a55] text-white py-2 px-4 rounded hover:bg-[#9290c3] duration-300 mb-4">
          Tambahkan Ulasan
        </button>
        <div
          className="review-list space-y-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "16px",
          }}
        >
          <div className="review p-4 border rounded shadow-md border-yellow-500">
            <h3 className="text-xl font-bold">Sindi</h3>
            <p className="text-lg">5 ★★★★★</p>
            <p>Hasil kamera ini luar biasa dengan harga terjangkau...</p>
            <p>Diposting pada 16 Agustus 2023</p>
          </div>
          <div className="review p-4 border rounded shadow-md border-yellow-500">
            <h3 className="text-xl font-bold">Adrian Wahyu</h3>
            <p className="text-lg">5 ★★★★★</p>
            <p>Pengalaman saya menggunakan kamera ini sangat memuaskan...</p>
            <p>Diposting pada 15 Agustus 2023</p>
          </div>
          <div className="review p-4 border rounded shadow-md border-yellow-500">
            <h3 className="text-xl font-bold">Ikhsan</h3>
            <p className="text-lg">5 ★★★★★</p>
            <p>Kamera ini menawarkan performa yang sangat baik...</p>
            <p>Diposting pada 15 Agustus 2023</p>
          </div>
          <div className="review p-4 border rounded shadow-md border-yellow-500">
            <h3 className="text-xl font-bold">Darto</h3>
            <p className="text-lg">5 ★★★★★</p>
            <p>Setelah menggunakan kamera ini, saya sangat terkesan...</p>
            <p>Diposting pada 15 Agustus 2023</p>
          </div>
        </div>
      </section>

      <section className="related-products mt-12 mx-[5%] px-8">
        <h2 className="text-2xl font-bold mb-4">Produk Terkait</h2>
        <div className="related-product-list grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="related-product p-4 border rounded shadow-md">
            <img
              src="related-product1-url"
              alt="Canon Camera EOS"
              className="mb-4"
            />
            <p>Canon Camera EOS</p>
            <p>Rp. 140.000,- / hari</p>
          </div>
          <div className="related-product p-4 border rounded shadow-md">
            <img
              src="related-product2-url"
              alt="Inzoka Mini Camera"
              className="mb-4"
            />
            <p>Inzoka Mini Camera</p>
            <p>Rp. 100.000,- / hari</p>
          </div>
          <div className="related-product p-4 border rounded shadow-md">
            <img
              src="related-product3-url"
              alt="Sony Video Camera"
              className="mb-4"
            />
            <p>Sony Video Camera</p>
            <p>Rp. 160.000,- / hari</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Deskripsi;