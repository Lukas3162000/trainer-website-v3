import { useState } from 'react';
import React from 'react';

export default function Hero(){
    return (
    <section className="bg-gray-100 py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Starte jetzt – und werde jeden Tag ein Prozent besser
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Individuelle Trainingspläne, persönliche Betreuung & echtes Coaching – für Einsteiger und alle, die dranbleiben wollen.
        </p>
        <a
          href="kontakt"
          className="inline-block bg-orange-400 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-500 transition font-semibold"
        >
          Kostenloses Erstgespräch anfragen
        </a>
      </div>
    </section>
  );
}