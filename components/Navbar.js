"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-pink-500 text-white p-4 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Vina</h1>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
        <ul className={`md:flex space-x-6 ${open ? "block" : "hidden"} md:block`}>
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#portfolio">Portfolio</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
