import { useState } from 'react';
import React from 'react';
import MiniCard from '../components/MiniCard';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer.jsx';

export default function Contact() {

  return (
    <>
    <section >
      <div className='pt-20 flex flex-col' >
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Nimm Kontakt auf – dein individuelles Coaching beginnt hier
        </h1>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
          Ob du gerade startest, Fortschritte analysieren oder dein Coaching intensivieren willst: Ich freue mich, dich kennenzulernen. 
        </p>
        <div className='flex justify-center'>
          <div className='grid md:grid-cols-2 max-w-[10000px] justify-center gap-6 mb-12'>
            <MiniCard
              title="Kostenloses Erstgespräch"
              description="Unverbindlich starten und deine Ziele besprechen."
              icon="message"
            />

            <MiniCard
              title="Fortschritts-Check-In"
              description="Analyse & persönliche Rückmeldung zu deinem Trainingsfortschritt."
              icon="check"
            />
          </div>
        </div>
       </div>

        <ContactForm />
        

        <p className="text-center text-gray-600 mt-8">
          Oder schreib mir direkt an:{" "}
          <a href="mailto:kontakt@deine-seite.de" className="text-sky-600 hover:underline">
            kontakt@deine-seite.de
          </a>
        </p>

      </section>
      <Footer />
      

    </>
  )
}
