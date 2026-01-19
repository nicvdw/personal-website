'use client';
import { useState } from 'react';
import { Code, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'CONTACT', href: '/contact' },
    { name: 'ABOUT', href: '/about' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-dark/95 backdrop-blur-md z-50 border-b border-white/10">
      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-0">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Code className="text-primary" size={30} />
            </div>
            <span className="text-xl font-semibold text-white">
              Nicolaas
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/projects"
              className="relative bg-primary text-white px-6 py-2 rounded text-sm font-bold hover:bg-primary/90 transition-all overflow-hidden group hover:shadow-lg hover:shadow-primary/30"
            >
              <span className="relative z-10">PROJECTS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (FULL WIDTH) */}
      {isOpen && (
        <div className="lg:hidden w-full bg-black/60 backdrop-blur-lg border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-lg font-medium text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-primary text-white px-6 py-3 rounded text-lg font-bold"
            >
              PROJECTS
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
