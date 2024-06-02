import React, { useState, useEffect } from 'react';
import produk3 from '../assets/images/fitur/produk3.png';
import { FiSearch, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const productData = [
  { id: 1, image: produk3 },
  { id: 2, image: produk3 },
  { id: 3, image: produk3 },
  { id: 4, image: produk3 },
  { id: 5, image: produk3 },
  { id: 6, image: produk3 },
  { id: 7, image: produk3 },
  { id: 8, image: produk3 },
  { id: 9, image: produk3 },
  { id: 10, image: produk3 },
  { id: 11, image: produk3 },
];

const names = [
  'Wireless Headphones',
  'Sony Camera',
  'Logitech Speaker',
  'Gaming Mouse',
  'Drone',
  'Smart Watch',
  'Bluetooth Speaker',
  'Action Camera',
  'VR Headset',
  'Fitness Tracker',
  'Smart Home Hub'
];

const prices = [
  'Rp. 100.000,- / hari',
  'Rp. 190.000,- / hari',
  'Rp. 150.000,- / hari',
  'Rp. 80.000,- / hari',
  'Rp. 120.000,- / hari',
  'Rp. 200.000,- / hari',
  'Rp. 250.000,- / hari',
  'Rp. 250.000,- / hari',
  'Rp. 250.000,- / hari',
  'Rp. 250.000,- / hari',
  'Rp. 300.000,- / hari'
];

const filters = [
  {
    category: 'Kategori',
    options: ['Kamera', 'Aksesoris Kamera', 'Perabotan', 'Audio'],
  },
];

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const Fitur = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const shuffledNames = shuffleArray([...names]);
    const shuffledPrices = shuffleArray([...prices]);

    const updatedProducts = productData.map((product, index) => ({
      ...product,
      name: shuffledNames[index],
      price: shuffledPrices[index],
    }));

    setProducts(updatedProducts);
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const fillEmptyItems = () => {
    const emptyItems = [];
    const itemsNeeded = 8 - filteredProducts.length;
    for (let i = 0; i < itemsNeeded; i++) {
      emptyItems.push(<div key={`empty-${i}`} className="bg-transparent p-4 rounded-2xl"></div>);
    }
    return emptyItems;
  };

  return (
    <div className="container mx-auto my-12 p-12">
      <section className="my-8 text-left border-b-2 border-[#1b1a55]">
        <h2 className="text-4xl font-bold mb-4 text-[#1b1a55]">Temukan Beragam Alat Yang Kamu Butuhkan</h2>
        <p className="text-lg text-gray-600">Layanan fleksibel dan mudah untuk semua kebutuhan alat Anda.</p>
      </section>
      <div className="flex cursor-default">
        <aside className="w-1/6 mr-6 p-4 border-2 border-[#1b1a55] rounded-2xl">
          <h2 className="text-3xl font-semibold mb-6 border-b-2 border-[#1b1a55] pb-2 text-[#1b1a55]">Filter</h2>
          {filters.map((filter, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-[#1b1a55]">{filter.category}</h3>
              {filter.options.map((option, idx) => (
                <div key={idx} className="flex items-center mb-1">
                  <input type="checkbox" id={option} name={option} className="mr-2" />
                  <label htmlFor={option} className="text-[#1b1a55]">{option}</label>
                </div>
              ))}
            </div>
          ))}
        </aside>
        <div className="flex flex-col flex-1">
          <div className="relative mb-6">
            <div className="flex items-center border border-gray-300 rounded-lg shadow-lg focus-within:ring-1 focus-within:ring-[#1b1a55]">
              <div className="p-4 bg-[#1b1a55] rounded-l-lg">
                <FiSearch className="text-white" />
              </div>
              <input
                type="text"
                placeholder="Cari produk..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full p-3 pl-3 border-none focus:outline-none focus:ring-0 rounded-r-lg"
              />
              {searchQuery && (
                <button onClick={clearSearch} className="absolute right-0 top-0 bottom-0 flex items-center pr-3">
                  <FiX className="text-gray-500" />
                </button>
              )}
            </div>
          </div>
          <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-default" style={{ minHeight: '54vh' }}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                key={product.id}
                className="group relative p-4 border-2 rounded-2xl border-[#1b1a55] text-center duration-300"
                style={{ height: '300px', transition: 'transform 0.5s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
                <h3 className="text-xl font-medium text-[#1b1a55]">{product.name}</h3>
                <p className="text-base bg-[#9290c3] text-white">{product.price}</p>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden rounded-b-xl">
                  <button 
                    className="w-full h-12 px-4 py-2 bg-[#1b1a55] text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    onClick={() => navigate(`/deskripsi/${product.id}`)}
                  >
                    Cek & Sewa Sekarang
                  </button>
                </div>
              </div>
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500">Produk tidak ditemukan</p>
            )}
            {fillEmptyItems()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Fitur;
