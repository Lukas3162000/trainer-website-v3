import { useState } from 'react';
import React from 'react';


export default function OfferCard({ imageSrc, title, description, buttonLabel = "Mehr erfahren", buttonLink = "/trainings" }) {
  return (
    <div className="bg-white rounded-2xl shadow-md transition hover:shadow-xl min-w-[250px] flex-shrink-0 snap-start">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col justify-between h-full">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <a href={buttonLink} className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
          {buttonLabel}
        </a>
      </div>
    </div>
  );
}