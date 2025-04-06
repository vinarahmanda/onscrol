"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion"; // ✅ INI SUDAH ADA

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Pesan terkirim, terima kasih telah meninggalkan pesan.");
    setEmail("");
    setMessage("");
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-pink-100 via-white to-blue-200 text-gray-900">
      {/* Navbar */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-md rounded-full shadow-lg px-10 py-3 flex space-x-8 items-center z-10">
        <Link href="#home" className="text-gray-700 font-semibold hover:text-pink-600">Home</Link>
        <Link href="#about" className="text-gray-700 font-semibold hover:text-pink-600">About</Link>
        <Link href="#skills" className="text-gray-700 font-semibold hover:text-pink-600">Skills</Link>
        <Link href="#portfolio" className="text-gray-700 font-semibold hover:text-pink-600">Portfolio</Link>
        <Link href="#contact" className="text-gray-700 font-semibold hover:text-pink-600">Contact</Link>
      </div>

      {/* Section Home */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl font-bold text-gray-800" data-aos="fade-down">
          <span className="font-arabic text-5xl">بِسْمِ ٱللَّٰهِ</span><br />
          Welcome to My Portfolio
        </h1>
        <motion.div
          whileHover={{ scale: 1.2, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mt-4"
          data-aos="zoom-in"
        >
          <Image
            src="/v.jpg"
            alt="Vina's Photo"
            width={200}
            height={200}
            className="rounded-full shadow-xl border-4 border-white"
          />
        </motion.div>

        <Link
          href="#contact"
          className="mt-6 px-6 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-md hover:bg-pink-600"
          data-aos="zoom-in"
        >
          Contact Me
        </Link>
      </section>

      {/* Section About */}
      <section id="about" className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-3xl font-bold text-gray-900" data-aos="fade-up">About Me</h2>
        <div className="flex items-center mt-4 gap-4">
          <p className="text-lg text-gray-700 max-w-2xl mt-4" data-aos="fade-right">
            Aku Vina Rahmanda Indriyani, Mahasiswa Semester 4 jurusan Komputerisasi Akuntansi.
            Aku lulusan SMK Bhakti Putra Nagreg, jurusan Rekayasa Perangkat Lunak. Aku suka banget dunia IT dan bercita-cita menjadi seorang IT Expert!
          </p>
        </div>

        {/* Cute Cow Images */}
        <div className="flex gap-4 mt-8">
          <Image src="/sapi.png" alt="Cute Cow 1" width={100} height={100} className="animate-bounce" data-aos="zoom-in" />
          <Image src="/sapi.png" alt="Cute Cow 2" width={100} height={100} className="animate-bounce" data-aos="zoom-in" />
          <Image src="/sapi.png" alt="Cute Cow 3" width={100} height={100} className="animate-bounce" data-aos="zoom-in" />
        </div>
      </section>

      {/* Section Skills */}
      <section id="skills" className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-6">
        <h2 className="text-3xl font-bold text-gray-900" data-aos="fade-up">My Skills</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {["JavaScript", "React", "Next.js", "Node.js", "MySQL", "PHP", "HTML", "CSS"].map((skill, index) => (
            <motion.div
              key={index}
              className="px-6 py-2 bg-pink-500 text-white rounded-full shadow-md"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              data-aos="zoom-in"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section Portfolio */}
      <section id="portfolio" className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-200 to-pink-300 text-center px-6">
        <h2 className="text-3xl font-bold text-gray-900" data-aos="fade-up">My Portfolio</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Web Pengaduan Masyarakat", "CV Online", "Website Penjualan"].map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md w-64 text-center"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              data-aos="zoom-in"
            >
              <h3 className="text-xl font-semibold text-gray-800">{project}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="h-screen flex flex-col justify-center items-center bg-pink-600 text-center text-white px-6">
        <h2 className="text-3xl font-bold" data-aos="fade-up">Contact Me</h2>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col space-y-4 w-80" data-aos="fade-up">
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 rounded-lg text-gray-900"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            className="px-4 py-2 rounded-lg text-gray-900"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit" className="px-6 py-2 bg-black text-white rounded-lg shadow-md">
            Send Message
          </button>
        </form>
        {status && <p className="mt-4">{status}</p>}
      </section>
    </main>
  );
}
