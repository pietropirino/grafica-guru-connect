
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const CourseDetails = () => {
  const features = [
    {
      title: "Allenatori Qualificati UEFA",
      description: "Staff tecnico con certificazioni UEFA e anni di esperienza nell'insegnamento del calcio giovanile."
    },
    {
      title: "Strutture all'avanguardia",
      description: "Campi in erba sintetica di ultima generazione, spogliatoi moderni, palestra attrezzata."
    },
    {
      title: "Programma Tecnico",
      description: "Sviluppo di abilità tecniche, tattiche, fisiche e cognitive con metodologia personalizzata."
    },
    {
      title: "Tornei e Competizioni",
      description: "Partecipazione a campionati locali e tornei regionali e nazionali durante l'anno."
    },
    {
      title: "Kit di Allenamento",
      description: "Completino ufficiale, borsa sportiva, k-way e tuta di rappresentanza inclusi nell'iscrizione."
    },
    {
      title: "Supporto Educativo",
      description: "Monitoraggio scolastico e sviluppo di valori come rispetto, disciplina e spirito di squadra."
    },
  ];

  return (
    <section id="details" className="bg-soccer-light py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Il Nostro Corso</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            La Scuola Calcio FC Academia offre un percorso formativo completo che va oltre il semplice insegnamento del calcio, 
            promuovendo lo sviluppo fisico, tecnico e personale dei giovani atleti.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="course-card h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-soccer-blue rounded-full flex items-center justify-center text-white mr-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-soccer-blue">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-soccer-blue text-white p-8 rounded-xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">Programma Settimanale</h3>
              <p className="mb-4">
                Il corso si svolge da settembre a giugno con 3 allenamenti settimanali e partite nel fine settimana.
                Ogni allenamento dura 90 minuti ed è strutturato per massimizzare lo sviluppo tecnico e tattico dei giovani calciatori.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Lunedì e Mercoledì: 17:00 - 18:30 (Categorie Piccoli Amici, Pulcini)</li>
                <li>Lunedì e Giovedì: 18:30 - 20:00 (Categorie Esordienti, Giovanissimi)</li>
                <li>Venerdì: Allenamento specifico per ruolo</li>
                <li>Sabato/Domenica: Partite di campionato o tornei</li>
              </ul>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-white p-6 rounded-xl text-soccer-blue text-center">
                <h4 className="text-xl font-bold mb-2">Quota Annuale</h4>
                <div className="text-4xl font-bold mb-2">€450</div>
                <p className="text-sm text-gray-600 mb-4">Pagamento in un'unica soluzione o in due rate</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm">Include kit completo, assicurazione e tesseramento federale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
