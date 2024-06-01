import React, { useState, useEffect } from 'react';
import produk3 from '../assets/images/fitur/produk3.png';
import { FiSearch, FiX } from 'react-icons/fi';

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
  'Virtual Reality Headset',
  'Portable Projector',
  'Digital SLR Camera'
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
  const [selectedFilters, setSelectedFilters] = useState({});

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

  const handleFilterChange = (category, option) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [category]: option,
    }));
  };

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

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
      <section className="my-8 border-b-8 border-[#1b1a55] text-center pb-6">
        <h2 className="text-4xl font-bold mb-4 text-[#1b1a55]">Temukan Beragam Alat Yang Kamu Butuhkan</h2>
        <p className="text-lg text-gray-600">Layanan fleksibel dan mudah untuk semua kebutuhan alat Anda.</p>
      </section>
      <div className="flex mb-6 pb-4 border-b border-[#1b1a55]">
        <div className="relative flex-1">
          <div className="flex items-center border border-gray-300 rounded-lg shadow focus-within:ring-1 focus-within:ring-[#1b1a55]">
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
        <div className="flex items-center ml-4 space-x-4">
          {filters.map((filter, index) => (
            <div key={index} className="relative">
              <select
                onChange={(e) => handleFilterChange(filter.category, e.target.value)}
                className="p-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-1 focus:ring-[#1b1a55]"
              >
                <option value="">{filter.category}</option>
                {filter.options.map((option, idx) => (
                  <option key={idx} value={option}>{option}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" style={{ minHeight: '53vh' }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white p-4 rounded-2xl shadow-lg text-center hover:shadow-2xl hover:border hover:border-[#1b1a55] duration-300"
              style={{ height: '300px', transition: 'transform 0.5s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
              <h3 className="text-lg font-medium text-[#1b1a55]">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.price}</p>
              <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                <button className="w-full h-12 px-4 py-2 bg-[#1b1a55] text-white rounded-b-2xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  Sewa Sekarang
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
  );
};

export default Fitur;
