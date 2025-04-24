
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const Success = () => {
  return (
    <div className="min-h-screen bg-soccer-light flex flex-col">
      <Header />
      
      <div className="flex-grow py-20 px-4 flex items-center justify-center">
        <div className="container max-w-2xl mx-auto">
          <div className="step-indicator">
            <div className="step">
              <div className="step-circle step-completed">1</div>
              <div className="text-sm">Documenti</div>
            </div>
            <div className="step-line step-line-active"></div>
            <div className="step">
              <div className="step-circle step-completed">2</div>
              <div className="text-sm">Pagamento</div>
            </div>
            <div className="step-line step-line-active"></div>
            <div className="step">
              <div className="step-circle step-active">3</div>
              <div className="text-sm">Completato</div>
            </div>
          </div>

          <div className="form-container text-center">
            <div className="mx-auto w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6">
              <Check className="text-white w-10 h-10" />
            </div>
            
            <h2 className="text-3xl font-bold mb-4 text-soccer-blue">Iscrizione Completata!</h2>
            
            <p className="text-lg mb-8">
              Grazie per esserti iscritto al corso di calcio FC Academia. La tua iscrizione è stata completata con successo.
            </p>
            
            <div className="mb-8 bg-soccer-light p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-soccer-blue">Prossimi Passi</h3>
              
              <ul className="text-left space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-green-500">
                    <Check className="w-5 h-5" />
                  </div>
                  <span>Riceverai un'email di conferma con tutti i dettagli dell'iscrizione.</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-green-500">
                    <Check className="w-5 h-5" />
                  </div>
                  <span>Il kit di allenamento sarà disponibile per il ritiro presso la nostra segreteria da due settimane prima dell'inizio del corso.</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-green-500">
                    <Check className="w-5 h-5" />
                  </div>
                  <span>Ti contatteremo per confermare la data del primo allenamento e per fornirti tutte le informazioni necessarie.</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <Link to="/">
                <Button className="soccer-btn">
                  Torna alla Home
                </Button>
              </Link>
              <p className="text-sm text-gray-500">
                Per qualsiasi domanda, contattaci a <a href="mailto:info@fcacademia.it" className="text-soccer-blue">info@fcacademia.it</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Success;
