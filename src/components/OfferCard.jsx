import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';


export default function OfferCard({ imageSrc, title, description, buttonLabel = "Mehr erfahren", buttonLink = "/trainings", imageClassName ="" }) {
  return (


    <div className="bg-white rounded-2xl shadow-md transition hover:shadow-xl min-w-[250px] max-w-[400px] flex-shrink-0 snap-start flex flex-col h-full ">
      <img src={imageSrc} alt={title} className={`w-full h-48 object-cover rounded-t-2xl ${imageClassName}`} />
      <div className="p-6 flex flex-col flex-grow ">
        <div className='flex-grow flex flex-col mb-4'>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-neutral-600 mb-4">{description}</p>
        </div>

        <Link
          to={buttonLink}
          className="mt-auto bg-sky-600 text-white font-semibold text-center px-4 py-2 rounded-full text-sm hover:bg-sky-700 transition"
        >
          {buttonLabel}
        </Link>
      </div>
    </div>

    
  );
}