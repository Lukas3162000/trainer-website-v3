import { useState } from 'react';
import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../components/Footer.jsx';
import AboutPic from "../assets/Images/About_pic.jpg";

export default function About() {

  return (
    <>

    <section className="bg-white text-gray-800 py-20 px-4">
      <div className='flex flex-col items-center'>
        <h1 className="text-4xl font-bold mb-4 text-center lg:text-left">
          Über mich
        </h1>
        <p className="text-center lg:text-left text-lg text-gray-600 mb-12">
          Wer ich bin, was mich antreibt – und was ich weitergebe
        </p>
      </div>

  <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row gap-12 items-center">
    {/* Textbereich */}
    <div className="max-w-3xl">
 

      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          Früher hatte ich selbst mit Übergewicht und mangelndem Selbstwertgefühl zu kämpfen.
          Fitness war für mich der Weg, wieder Kontrolle und Selbstvertrauen zu gewinnen.
        </p>
        <p>
          Ich bin Lukas, 25, und trainiere mittlerweile seit fast 10 Jahren – ernsthaft seit rund 5.
          Der Weg dahin war nicht immer gerade: Am Anfang habe ich viele Fehler gemacht – zu viel Cardio,
          falsches Training, schlechte Ernährung, wenig Schlaf. Aber mit der Zeit habe ich Stück für Stück
          gelernt, was wirklich funktioniert.
        </p>
        <p>
          Neben meinem Studium in Medien und Marketing habe ich in mehreren Fitnessstudios gearbeitet –
          im FitPur Offenburg und im Clever Fit Gengenbach. Die Leidenschaft für Fitness war immer da, und
          durch Bücher wie die <em>Fitness-Fibel</em> von Sjard Roscher habe ich angefangen, das Thema
          strategischer anzugehen.
        </p>
        <p>
          Mit regelmäßigem Training, strukturierter Ernährung und bewusster Lebensweise kamen schließlich
          auch die Ergebnisse. Während meines Masters habe ich zusätzlich die Fitness-Trainer-B-Lizenz
          gemacht – nicht nur, um mein Wissen zu vertiefen, sondern weil ich überzeugt bin: Wer andere
          begleiten will, muss selbst verstanden haben, wie es wirklich läuft.
        </p>
        <p>
          Heute trainiere ich dreimal pro Woche mit einem flexiblen Ganzkörperplan, achte auf ausgewogene
          Ernährung, Schlaf und Regeneration – alltagstauglich, nachhaltig und wirksam.
        </p>
        <p>
          Ich bringe dich mit klarer Struktur, individueller Strategie und echtem Support voran – ohne Umwege, ohne Schnickschnack.
        </p>
      </div>

      <p className="mt-10 text-xl font-semibold text-center lg:text-left">
        Mein Motto:{" "}
        <span className="italic font-normal">
          Offen bleiben, dranbleiben – jeden Tag ein Prozent besser.
        </span>
      </p>

      <Link
        to="/kontakt"
        className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-full w-full lg:w-auto text-center font-semibold hover:bg-orange-600 transition"
      >
        Jetzt Kontakt aufnehmen
      </Link>
    </div>

    {/* Bildbereich */}
    <div className="w-full lg:w-[40%] h-auto lg:h-[400px]">
      <img
        src={AboutPic}
        alt="Lukas"
        className="w-full h-auto lg:h-full object-contain lg:object-cover rounded-2xl shadow-lg"
      />
    </div>
  </div>
</section>



      <Footer />
    </>
  )
}
