import { useState } from 'react';
import React from 'react';
import Hero from '../components/Hero.jsx';
import AboutSection from '../components/AboutSection.jsx';
import OfferCard from '../components/OfferCard.jsx';

export default function Home() {

  return (
    <>
      <Hero />
      <AboutSection />
      <div className='flex overflow-x-auto gap-6 px-4 snap-x snap-mandatory scroll-smooth scrollbar-hide'>	
        <OfferCard imageSrc={"https://media.foodspring.com/magazine/public/uploads/2020/11/Motivation-2.jpg"} title={"Testtitle"} description={"Description"} />
        <OfferCard imageSrc={"https://media.foodspring.com/magazine/public/uploads/2020/11/Motivation-2.jpg"} title={"Testtitle"} description={"Description"} />
        <OfferCard imageSrc={"https://media.foodspring.com/magazine/public/uploads/2020/11/Motivation-2.jpg"} title={"Testtitle"} description={"Description"} />
        <OfferCard imageSrc={"https://media.foodspring.com/magazine/public/uploads/2020/11/Motivation-2.jpg"} title={"Testtitle"} description={"Description"} />
        <OfferCard imageSrc={"https://media.foodspring.com/magazine/public/uploads/2020/11/Motivation-2.jpg"} title={"Testtitle"} description={"Description"} />
        <OfferCard imageSrc={"https://media.foodspring.com/magazine/public/uploads/2020/11/Motivation-2.jpg"} title={"Testtitle"} description={"Description"} />
        <OfferCard imageSrc={"https://media.foodspring.com/magazine/public/uploads/2020/11/Motivation-2.jpg"} title={"Testtitle"} description={"Description"} />
        <OfferCard imageSrc={"https://media.foodspring.com/magazine/public/uploads/2020/11/Motivation-2.jpg"} title={"Testtitle"} description={"Description"} />
        <OfferCard imageSrc={"https://media.foodspring.com/magazine/public/uploads/2020/11/Motivation-2.jpg"} title={"Testtitle"} description={"Description"} />
        <OfferCard imageSrc={"https://media.foodspring.com/magazine/public/uploads/2020/11/Motivation-2.jpg"} title={"Testtitle"} description={"Description"} />
        <OfferCard imageSrc={"https://media.foodspring.com/magazine/public/uploads/2020/11/Motivation-2.jpg"} title={"Testtitle"} description={"Description"} />
        <OfferCard imageSrc={"https://media.foodspring.com/magazine/public/uploads/2020/11/Motivation-2.jpg"} title={"Testtitle"} description={"Description"} />
      </div>
    </>
  )
}
