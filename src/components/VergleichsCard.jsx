import React from 'react';
import { Link } from 'react-router-dom';

export default function VergleichsCard() {
  return (
<div className="bg-white rounded-xl shadow-sm hover:shadow-md p-6 mt-12 max-w-7xl mx-auto">
  <h2 className="text-xl font-bold text-center mb-6 text-neutral-800">
    Welches Training passt zu dir?
  </h2>
  <div className="overflow-x-auto">
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="bg-neutral-100 text-left text-neutral-700">
          <th className="p-3 font-medium">Merkmal</th>
          <th className="p-3 font-medium text-sky-700 text-center">Starter-Programm</th>
          <th className="p-3 font-medium text-orange-600 text-center">Fortgeschrittene Betreuung</th>
        </tr>
      </thead>
      <tbody className="text-neutral-700">
        <tr className="border-t">
          <td className="p-3">Erfahrung nötig?</td>
          <td className="p-3 text-center">❌ Keine Vorkenntnisse</td>
          <td className="p-3 text-center">✅ Etwas Erfahrung empfohlen</td>
        </tr>
        <tr className="border-t">
          <td className="p-3">Fokus</td>
          <td className="p-3 text-center">Basics & Motivation</td>
          <td className="p-3 text-center">Optimierung & Analyse</td>
        </tr>
        <tr className="border-t">
          <td className="p-3">Inhalte</td>
          <td className="p-3 text-center">Anamnese, Zirkeltraining</td>
          <td className="p-3 text-center">Plan-Check, Anpassung</td>
        </tr>
        <tr className="border-t">
          <td className="p-3">Zielgruppe</td>
          <td className="p-3 text-center">Einsteiger:innen</td>
          <td className="p-3 text-center">Trainierende mit Vorerfahrung</td>
        </tr>
        <tr className="border-t">
          <td className="p-3">Ziel</td>
          <td className="p-3 text-center">Sicher starten & dranbleiben</td>
          <td className="p-3 text-center">Fortschritt maximieren</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


  );
}
