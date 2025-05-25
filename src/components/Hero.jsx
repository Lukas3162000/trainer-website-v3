import React from 'react';
import introVideo from '../assets/Video/self_cut_2.mp4';
import { Link } from 'react-router-dom';


export default function Hero() {
  return (
    <section className="relative h-[50vh] overflow-hidden">
      <video
        className="absolute top-0 z-10 left-0 w-full h-full object-cover"
        src={introVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      
      <div className="relative z-10 flex flex-col justify-center items-center h-full bg-black/70 backdrop-blur-sm px-4 text-center">
        <div className="max-w-3xl mx-auto text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Starte jetzt – und werde jeden Tag ein Prozent besser
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Individuelle Trainingspläne, persönliche Betreuung & echtes Coaching – für Einsteiger und alle, die dranbleiben wollen.
          </p>
          <Link
            to="/kontakt"
            className="inline-block bg-orange-400 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-500 transition font-semibold"
          >
            Kostenloses Erstgespräch anfragen
          </Link>
        </div>
      </div>
      
      
    </section>
    
  );
}
