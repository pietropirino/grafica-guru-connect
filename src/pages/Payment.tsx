
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast"

const Payment = () => {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const formatCardNumber = (value: string) => {
    // Remove all non-digit characters
    const cleaned = value.replace(/\D/g, '');
    // Add space after every 4 digits
    const formatted = cleaned.replace(/(\d{4})(?=\d)/g, '$1 ');
    // Limit to 19 characters (16 digits + 3 spaces)
    return formatted.substring(0, 19);
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation checks
    if (!cardName || !cardNumber || !expMonth || !expYear || !cvv) {
      toast({
        title: "Dati incompleti",
        description: "Per favore compila tutti i campi della carta.",
        variant: "destructive"
      });
      return;
    }

    // Simple validation for card number format (16 digits)
    if (cardNumber.replace(/\s/g, '').length !== 16) {
      toast({
        title: "Numero carta non valido",
        description: "Il numero della carta deve contenere 16 cifre.",
        variant: "destructive"
      });
      return;
    }

    // Simple CVV validation (3-4 digits)
    if (!/^\d{3,4}$/.test(cvv)) {
      toast({
        title: "CVV non valido",
        description: "Il CVV deve contenere 3 o 4 cifre.",
        variant: "destructive"
      });
      return;
    }

    // In a real application, you would process payment through a secure payment gateway
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Pagamento completato",
        description: "Il tuo pagamento è stato elaborato con successo!"
      });
      navigate('/success');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-soccer-light flex flex-col">
      <Header />
      
      <div className="flex-grow py-20 px-4">
        <div className="container mx-auto">
          <div className="step-indicator">
            <div className="step">
              <div className="step-circle step-completed">1</div>
              <div className="text-sm">Documenti</div>
            </div>
            <div className="step-line step-line-active"></div>
            <div className="step">
              <div className="step-circle step-active">2</div>
              <div className="text-sm">Pagamento</div>
            </div>
            <div className="step-line"></div>
            <div className="step">
              <div className="step-circle step-incomplete">3</div>
              <div className="text-sm">Completato</div>
            </div>
          </div>

          <div className="form-container">
            <h2 className="text-2xl font-bold mb-6 text-center text-soccer-blue">Pagamento Iscrizione</h2>
            <p className="text-gray-600 mb-8 text-center">
              Completa il pagamento per finalizzare l'iscrizione al corso di calcio.
            </p>

            <div className="bg-soccer-blue text-white p-4 rounded-lg mb-8">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold">Corso Scuola Calcio - Stagione 2025/2026</h3>
                  <p className="text-sm opacity-80">Include kit completo, assicurazione e tesseramento</p>
                </div>
                <div className="text-xl font-bold">€450,00</div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-soccer-blue">Dettagli Pagamento</h3>
                
                <div className="mb-4">
                  <label htmlFor="cardName" className="soccer-label">Nome sulla Carta</label>
                  <input
                    type="text"
                    id="cardName"
                    className="soccer-input"
                    placeholder="Mario Rossi"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="cardNumber" className="soccer-label">Numero Carta</label>
                  <input
                    type="text"
                    id="cardNumber"
                    className="soccer-input"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    maxLength={19}
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="expMonth" className="soccer-label">Mese Scadenza</label>
                    <select
                      id="expMonth"
                      className="soccer-input"
                      value={expMonth}
                      onChange={(e) => setExpMonth(e.target.value)}
                    >
                      <option value="">MM</option>
                      {Array.from({ length: 12 }, (_, i) => {
                        const month = i + 1;
                        return (
                          <option key={month} value={month.toString().padStart(2, '0')}>
                            {month.toString().padStart(2, '0')}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="expYear" className="soccer-label">Anno Scadenza</label>
                    <select
                      id="expYear"
                      className="soccer-input"
                      value={expYear}
                      onChange={(e) => setExpYear(e.target.value)}
                    >
                      <option value="">AAAA</option>
                      {Array.from({ length: 10 }, (_, i) => {
                        const year = new Date().getFullYear() + i;
                        return (
                          <option key={year} value={year.toString()}>
                            {year}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="cvv" className="soccer-label">CVV</label>
                    <input
                      type="password"
                      id="cvv"
                      className="soccer-input"
                      placeholder="123"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                      maxLength={4}
                    />
                  </div>
                </div>
              </div>

              <div className="border-t pt-6 mb-6">
                <div className="flex justify-between mb-2">
                  <span>Subtotale:</span>
                  <span>€450,00</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Totale:</span>
                  <span className="text-soccer-blue">€450,00</span>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  type="submit" 
                  className="soccer-btn w-full md:w-1/2" 
                  disabled={loading}
                >
                  {loading ? "Elaborazione in corso..." : "Completa Pagamento"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Payment;
