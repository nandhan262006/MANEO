"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Scissors } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-dark/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-2 group">
            <Scissors className="w-6 h-6 text-gold group-hover:rotate-45 transition-transform duration-300" />
            <span className="text-2xl font-bold tracking-wider text-white">
              MANE<span className="text-maneo-o">O</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-[0.15em] text-white/80 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+919292055555"
              className="flex items-center gap-2 bg-gold hover:bg-gold-dark text-dark font-semibold px-4 py-2.5 rounded-full transition-all duration-300 text-xs sm:text-sm"
            >
              <Phone className="w-4 h-4" />
              +91 92920 55555
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-dark/95 backdrop-blur-md px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm uppercase tracking-[0.2em] text-white/80 hover:text-gold transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+919292055555"
            className="flex items-center gap-2 bg-gold hover:bg-gold-dark text-dark font-semibold px-5 py-2.5 rounded-full transition-all text-sm w-fit"
          >
            <Phone className="w-4 h-4" />
            +91 92920 55555
          </a>
        </div>
      </div>
    </nav>
  );
}
