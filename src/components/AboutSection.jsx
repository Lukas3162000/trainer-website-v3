import { useState } from 'react';
import React from 'react';

export default function AboutSection(){

    return(

    <section className="py-20 px-4 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Über mich</h2>
        <p className="text-lg mb-4">
          Früher hatte ich selbst mit Übergewicht und mangelndem Selbstwertgefühl zu kämpfen. Fitness war für mich der Weg, wieder Kontrolle und Selbstvertrauen zu gewinnen.
        </p>
        <p className="text-lg mb-4">
          Heute helfe ich anderen, genau diesen Weg zu gehen – individuell, motivierend und ohne Schnickschnack. Ich begleite dich mit Plan, Struktur und echtem Support.
        </p>
        <p className="text-lg font-semibold">
          Mein Motto: Offen bleiben, dranbleiben – jeden Tag ein Prozent besser.
        </p>
      </div>
    </section>
    );
}