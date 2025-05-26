import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Fake-gesendete Daten:", data);

    // Hier könnte ein echtes API Call stehen
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm max-w-5xl mx-auto mt-8 hover:shadow-md">
      <h2 className="text-2xl font-bold mb-4">Kontaktiere mich</h2>

      {submitted ? (
        <div className="text-green-600 font-semibold">
          Danke für deine Anfrage! Ich melde mich bald bei dir.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Name*</label>
            <input
              name="name"
              type="text"
              required
              className="w-full border border-neutral-500 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-medium">E-Mail*</label>
            <input
              name="email"
              type="email"
              required
              className="w-full border border-neutral-500 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-medium">Telefonnummer</label>
            <input
              name="phone"
              type="tel"
              className="w-full border border-neutral-500 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-medium">Wunschtermin</label>
            <input
              name="appointment"
              type="datetime-local"
              className="w-full border border-neutral-500 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-medium">Nachricht*</label>
            <textarea
              name="message"
              required
              rows="4"
              className="w-full border border-neutral-500 rounded px-3 py-2"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-sky-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-sky-700 transition"
            >
              Anfrage senden
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
