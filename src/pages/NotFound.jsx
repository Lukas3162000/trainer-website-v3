import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import Footer from '../components/Footer';

export default function NotFound() {

  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 px-4">
      <h1 className="text-9xl font-extrabold text-orange-500 mb-6">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Seite nicht gefunden</h2>
      <p className="text-lg mb-8 text-center max-w-md">
        Die Seite, die du suchst, existiert leider nicht oder wurde verschoben.
      </p>
      <Link
        to="/"
        className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
      >
        Zur Startseite
      </Link>

    </section>

      <Footer />
    </>
  )
}
