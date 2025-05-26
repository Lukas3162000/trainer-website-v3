import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'; // Falls du react-icons nutzt

export default function Footer() {
  return (
    <footer className="bg-neutral-50 text-neutral-700 text-center py-6 mt-12 border-t border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Impressum Link */}
        <a href="/impressum" className="hover:text-sky-600 font-semibold">
          Impressum
        </a>

        {/* Social Media Icons */}
        <div className="flex gap-6 text-2xl">
          <a href="https://instagram.com/deinprofil" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-sky-600">
            <FaInstagram />
          </a>
          <a href="https://facebook.com/deinprofil" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-sky-600">
            <FaFacebook />
          </a>
          <a href="https://linkedin.com/in/deinprofil" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-sky-600">
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright & Hinweis */}
        <p className="text-sm max-w-xs">
          &copy; Lukas Schneider 2025<br />
          Diese Seite dient nur zu Demo-Zwecken und enthält keine echten Angebote.
        </p>
      </div>
    </footer>
  );
}
