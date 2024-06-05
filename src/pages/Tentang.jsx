import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../assets/images/tentang/rf-logo.svg'
import syahrul from '../assets/images/tentang/syahrul.png'
import sitimas from '../assets/images/tentang/sitimas.png'
import zikri from '../assets/images/tentang/zikri.png'
import daffa from '../assets/images/tentang/daffa.png'
import nurqirani from '../assets/images/tentang/nurqirani.png'
import misi from '../assets/images/tentang/misi.webp'


const Tentang = () => {

AOS.init({
  duration: 2000,
  once: true,
});
  
  return (
    <div className="min-h-screen flex flex-col justify-center items-center pt-10">
      <div className="container mx-auto px-6">
        <section className="text-center py-36" data-aos="fade-up">
          <h1 className="text-7xl font-bold text-[#1b1a55] mb-4">Tentang Kami</h1>
          <div className="flex justify-center mt-24 mb-8">
            <img src={logo} alt="Logo Perusahaan" className="h-72"/>
          </div>
          <p className="text-[#1b1a55] text-lg leading-relaxed px-48">
            <strong>RentFest,</strong> Website rental peralatan yang menawarkan solusi mudah untuk kebutuhan peralatan Anda. Kami menyediakan berbagai macam peralatan berkualitas untuk berbagai proyek, mulai dari kebutuhan pribadi maupun acara.
          </p>
        </section>

        <section className="flex flex-wrap md:flex-nowrap justify-between gap-12 items-center py-36" data-aos="fade-up">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-4xl font-bold text-[#1b1a55] mb-4">Misi Kami</h2>
            <p className="text-[#1b1a55] text-lg text-justify leading-relaxed">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src={misi} alt="Misi" className="w-full h-auto rounded-lg"/>
          </div>
        </section>

        <section className="text-center py-36" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-[#1b1a55] mb-12">Tim Kami</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white shadow-lg rounded-lg p-2 w-64 flex flex-col items-center">
              <img src={syahrul} alt="Syahrul Gunawan" className="w-full h-64 object-cover rounded-t-lg"/>
              <h2 className="text-xl font-semibold text-[#1b1a55] mt-4">Syahrul Gunawan</h2>
              <p className="text-[#1b1a55] mt-2">HUSTLER</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-2 w-64 flex flex-col items-center">
              <img src={sitimas} alt="Siti Mas Sangnia" className="w-full h-64 object-cover rounded-t-lg"/>
              <h2 className="text-xl font-semibold text-[#1b1a55] mt-4">Siti Mas Sangnia</h2>
              <p className="text-[#1b1a55] mt-2">HIPSTER</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-2 w-64 flex flex-col items-center">
              <img src={zikri} alt="Zikri Fahrul Hidayat" className="w-full h-64 object-cover rounded-t-lg"/>
              <h2 className="text-xl font-semibold text-[#1b1a55] mt-4">Zikri Fahrul Hidayat</h2>
              <p className="text-[#1b1a55] mt-2">HIPSTER</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-2 w-64 flex flex-col items-center">
              <img src={daffa} alt="Daffa Ikhsan 1" className="w-full h-64 object-cover rounded-t-lg"/>
              <h2 className="text-xl font-semibold text-[#1b1a55] mt-4">Daffa Ikhsan</h2>
              <p className="text-[#1b1a55] mt-2">HACKER</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-2 w-64 flex flex-col items-center">
              <img src={nurqirani} alt="Daffa Ikhsan 2" className="w-full h-64 object-cover rounded-t-lg"/>
              <h2 className="text-xl font-semibold text-[#1b1a55] mt-4">Daffa Ikhsan</h2>
              <p className="text-[#1b1a55] mt-2">HACKER</p>
            </div>
          </div>
        </section>

        <section className="bg-[#404040] py-20 rounded-t-3xl">
          <div className="container mx-auto px-4 max-w-2xl" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-[#f5f5f5] mb-6 text-center">Berikan Ulasan Anda</h2>
            <form className="space-y-4 text-lg">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full bg-transparent placeholder:text-gray-300 text-white p-2 border rounded-md shadow-sm outline-none focus:ring-white focus:border-white"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full bg-transparent placeholder:text-gray-300 text-white p-2 border rounded-md shadow-sm outline-none focus:ring-white focus:border-white"
                  placeholder="Email Anda"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full bg-transparent placeholder:text-gray-300 text-white p-2 border rounded-md shadow-sm outline-none focus:ring-white focus:border-white"
                  placeholder="Ulasan atau komentar Anda"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#9290c3] duration-300 text-xl text-white rounded-lg shadow-lg hover:bg-[#565575]"
                >
                  Kirim Ulasan
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tentang;
