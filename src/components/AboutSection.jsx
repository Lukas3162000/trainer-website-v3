import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AboutPic from "../assets/Images/About_pic.jpg";

export default function AboutSection(){

    return(

    <section className="py-20 px-4 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">Über mich</h2>
        <p className='flex justify-center text-lg mb-6 text-neutral-700'>Wer ich bin, was mich antreibt – und was ich weitergebe</p>
        
        <div className='flex flex-col gap-12 md:flex-row'>
          <img src={AboutPic} alt="" className='w-full max-w-full  md:max-w-[400px] md:w-full md:center h-auto object-cover rounded-xl transition-transform duration-300 ease-in-out hover:scale-105' />
          <div className='flex flex-col align-center justify-center'>
            <p className="text-lg mb-4">
              Ich bin Lukas, 25, aus Baden-Baden – und Fitness begleitet mich seit fast zehn Jahren.
            </p>
            <p className="text-lg mb-4">
             <strong>Mein Weg war alles andere als perfekt:</strong> Ich habe Fehler gemacht, ausprobiert, dazugelernt – neben dem Studium, im Gym, mit Büchern und in der Praxis. 
            </p>
            <p className="text-lg mb-4">
              Heute weiß ich, was funktioniert – und wie ich <strong> dich unterstützen kann, deinen eigenen Weg zu gehen.</strong>
            </p>

            <Link to="/über-mich" className="mt-6 text-center inline-block bg-sky-600 text-white px-6 py-2 rounded-full hover:bg-sky-700 transform-transition ease-in font-semibold">
              Mehr über mich
            </Link>
          </div>
        </div>


      </div>
    </section>
    );
}