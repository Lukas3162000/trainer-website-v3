import React from 'react';
import TrainingCard from '../components/TrainingCard';
import VergleichsCard from '../components/VergleichsCard';
import Footer from '../components/Footer.jsx';

export default function Trainings() {
  return (
    <>
    <section className="px-4 py-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4 text-center">Trainingsangebote</h1>

      <p className="max-w-3xl text-center text-neutral-700 mb-8">
        Hier findest du mein Trainingsangebot – ganz gleich, ob du gerade erst startest oder schon etwas Erfahrung mitbringst. 
        Ich helfe dir, dein Training auf deine Ziele und deinen Alltag abzustimmen.
      </p>


      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
        <TrainingCard
          titlePicture="https://images.unsplash.com/photo-1518617840859-acd542e13a99?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Einsteiger-Zirkeltraining"
          description="Dein perfekter Start ins Training – mit Anamnese, Einführung in die Übungen und kontinuierlicher Begleitung. Ideal für alle, die sicher und motiviert beginnen wollen."
          ctaLabel="Kontakt aufnehmen"
          ctaLink="/kontakt"
          positionPic="w-full h-96 object-cover object-[center_70%] rounded-t-xl"
          faq={[
            {
              question: "Brauche ich Vorerfahrung?",
              answer: "Nein, dieses Programm ist speziell für Anfänger gemacht – du wirst Schritt für Schritt eingeführt.",
            },
            {
              question: "Was ist eine Anamnese?",
              answer: "Dabei sprechen wir über deine gesundheitliche Vorgeschichte, Ziele und aktuelle Lebenssituation, um ein sicheres Training zu planen.",
            },
          ]}
        />

        <TrainingCard
          titlePicture="https://images.unsplash.com/photo-1662045010188-b5e91a7f504b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Fortgeschrittenen-Training & Planoptimierung"
          description="Du trainierst bereits, willst aber mehr herausholen? Wir analysieren deinen Plan, passen ihn an deine Lebenssituation an und setzen klare Trainingsschwerpunkte."
          ctaLabel="Kontakt aufnehmen"
          ctaLink="/kontakt"
          positionPic="w-full h-96 object-cover object-[center_50%] rounded-t-xl"
          faq={[
            {
              question: "Muss ich einen Trainingsplan mitbringen?",
              answer: "Nicht zwingend – aber wenn du bereits einen hast, analysieren wir ihn gemeinsam und optimieren gezielt.",
            },
            {
              question: "Wie individuell ist das Coaching?",
              answer: "Wir berücksichtigen Beruf, Alltag, Stresslevel und Ziele – daraus entsteht ein persönlicher Trainingsansatz.",
            },
          ]}
        />

        <div className='md:col-span-2'>
          <VergleichsCard />
        </div>

      </div>
    </section>
    <Footer />
    </>
  );
}
