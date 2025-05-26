import { useState } from 'react';
import React from 'react';
import Hero from '../components/Hero.jsx';
import AboutSection from '../components/AboutSection.jsx';
import OfferCard from '../components/OfferCard.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {

const offers = [
  {
    imageSrc: "https://images.unsplash.com/photo-1518617840859-acd542e13a99?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Beispielbild Fitness
    title: "Starter-Programm: 4 Wochen Einsteiger-Zirkeltraining",
    description: "Ideal für Komplettanfänger, die Schritt für Schritt fit werden wollen. Motivation und klare Anleitung inklusive.",
    buttonLabel: "Jetzt starten",
    buttonLink: "/trainings",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Individuelle Trainingspläne",
    description: "Maßgeschneiderte Pläne für deine Ziele – ob Fettabbau, Muskelaufbau oder mehr Beweglichkeit.",
    buttonLabel: "Mehr erfahren",
    buttonLink: "/trainings",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Fortgeschrittenenbetreuung & Coaching",
    description: "Für alle, die schon Basics kennen und den nächsten Schritt gehen wollen. Persönliche Betreuung vor Ort oder online. ",
    buttonLabel: "Coaching buchen",
    buttonLink: "/kontakt",
  },
  {
    imageSrc: "https://plus.unsplash.com/premium_photo-1726481790107-2d19ff142bf9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Fortschrittsanalyse & Check-In Calls",
    description: "Regelmäßige Analyse deines Trainingsfortschritts und individuelle Anpassungen für nachhaltigen Erfolg.",
    buttonLabel: "Mehr dazu",
    buttonLink: "/kontakt",
  },
];


  return (
    <>
      <Hero />
      <AboutSection />
      <div className='flex justify-center'>
        <div className='flex justify-start overflow-x-auto gap-6 px-4 snap-x snap-mandatory scroll-smooth scrollbar-hide'>	
        {offers.map(({ imageSrc, title, description, buttonLabel, buttonLink}, idx)=> (
          <OfferCard
          key={idx}
          imageSrc={imageSrc}
          title={title}
          description={description}
          buttonLabel={buttonLabel}
          buttonLink={buttonLink}
          imageClassName={idx === 1 ? "object-[center_-155px]" : idx === 2 ? "object-[center_-5px]" : ""}
          />
        ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
