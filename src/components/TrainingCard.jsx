import React from 'react';
import { Link } from 'react-router-dom';

export default function TrainingCard({ title, description, faq, ctaLabel, ctaLink, titlePicture, positionPic}) {
  return (

    <div className='bg-white rounded-xl shadow-sm mb-10 max-w-xl w-full hover:shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105' >
        
        <img src={titlePicture} alt="" className= {`rounded-t-xl  ${positionPic}`}   />
        <div className="p-6">
         
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-neutral-700 mb-4">{description}</p>

        <Link
            to={ctaLink}
            className="inline-block bg-orange-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-500 transition"
        >
            {ctaLabel}
        </Link>

        {faq && (
            <div className="mt-6 border-t pt-4">
            <h3 className="text-lg font-semibold mb-2">Häufige Fragen</h3>
            <ul className="space-y-2">
                {faq.map((item, index) => (
                <li key={index}>
                    <details className="bg-neutral-100 p-3 rounded">
                    <summary className="cursor-pointer font-medium">{item.question}</summary>
                    <p className="mt-2 text-sm text-neutral-700">{item.answer}</p>
                    </details>
                </li>
                ))}
            </ul>
            </div>
        )}
        </div>
    </div>
  );
}
