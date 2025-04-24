
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast"

const DocumentUpload = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [parentName, setParentName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [medicalCert, setMedicalCert] = useState<File | null>(null);
  const [idDocument, setIdDocument] = useState<File | null>(null);
  const [photoDocument, setPhotoDocument] = useState<File | null>(null);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation checks
    if (!firstName || !lastName || !dateOfBirth || !parentName || !parentEmail || !parentPhone) {
      toast({
        title: "Campo mancante",
        description: "Per favore compila tutti i campi personali.",
        variant: "destructive"
      });
      return;
    }

    if (!medicalCert || !idDocument || !photoDocument) {
      toast({
        title: "Documento mancante",
        description: "Per favore carica tutti i documenti richiesti.",
        variant: "destructive"
      });
      return;
    }

    if (!acceptTerms || !acceptPrivacy) {
      toast({
        title: "Accettazione termini",
        description: "Per procedere devi accettare i termini e la privacy policy.",
        variant: "destructive"
      });
      return;
    }

    // In a real application, you would upload the files to a server here
    // For demo purposes, we'll just simulate the upload
    toast({
      title: "Documenti caricati",
      description: "I documenti sono stati caricati con successo!"
    });

    // Navigate to payment page
    navigate('/payment');
  };

  return (
    <div className="min-h-screen bg-soccer-light flex flex-col">
      <Header />
      
      <div className="flex-grow py-20 px-4">
        <div className="container mx-auto">
          <div className="step-indicator">
            <div className="step">
              <div className="step-circle step-active">1</div>
              <div className="text-sm">Documenti</div>
            </div>
            <div className="step-line"></div>
            <div className="step">
              <div className="step-circle step-incomplete">2</div>
              <div className="text-sm">Pagamento</div>
            </div>
            <div className="step-line"></div>
            <div className="step">
              <div className="step-circle step-incomplete">3</div>
              <div className="text-sm">Completato</div>
            </div>
          </div>

          <div className="form-container">
            <h2 className="text-2xl font-bold mb-6 text-center text-soccer-blue">Iscrizione al Corso di Calcio</h2>
            <p className="text-gray-600 mb-8 text-center">
              Compila il modulo e carica i documenti necessari per completare l'iscrizione.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-soccer-blue">Informazioni Personali</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="soccer-label">Nome</label>
                    <input
                      type="text"
                      id="firstName"
                      className="soccer-input"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="soccer-label">Cognome</label>
                    <input
                      type="text"
                      id="lastName"
                      className="soccer-input"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="dateOfBirth" className="soccer-label">Data di Nascita</label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      className="soccer-input"
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-soccer-blue">Informazioni Genitore/Tutore</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="parentName" className="soccer-label">Nome Completo</label>
                    <input
                      type="text"
                      id="parentName"
                      className="soccer-input"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="parentEmail" className="soccer-label">Email</label>
                    <input
                      type="email"
                      id="parentEmail"
                      className="soccer-input"
                      value={parentEmail}
                      onChange={(e) => setParentEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="parentPhone" className="soccer-label">Telefono</label>
                    <input
                      type="tel"
                      id="parentPhone"
                      className="soccer-input"
                      value={parentPhone}
                      onChange={(e) => setParentPhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-soccer-blue">Documenti Richiesti</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="medicalCert" className="soccer-label">Certificato Medico</label>
                    <input
                      type="file"
                      id="medicalCert"
                      className="soccer-input pt-2"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => setMedicalCert(e.target.files ? e.target.files[0] : null)}
                    />
                    <p className="text-xs text-gray-500 mt-1">Formati accettati: PDF, JPG, PNG (max 5MB)</p>
                  </div>
                  
                  <div>
                    <label htmlFor="idDocument" className="soccer-label">Documento d'Identità</label>
                    <input
                      type="file"
                      id="idDocument"
                      className="soccer-input pt-2"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => setIdDocument(e.target.files ? e.target.files[0] : null)}
                    />
                    <p className="text-xs text-gray-500 mt-1">Formati accettati: PDF, JPG, PNG (max 5MB)</p>
                  </div>
                  
                  <div>
                    <label htmlFor="photoDocument" className="soccer-label">Foto Tessera</label>
                    <input
                      type="file"
                      id="photoDocument"
                      className="soccer-input pt-2"
                      accept=".jpg,.jpeg,.png"
                      onChange={(e) => setPhotoDocument(e.target.files ? e.target.files[0] : null)}
                    />
                    <p className="text-xs text-gray-500 mt-1">Formati accettati: JPG, PNG (max 2MB)</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-soccer-blue">Termini e Condizioni</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="terms" 
                      checked={acceptTerms} 
                      onCheckedChange={(checked) => setAcceptTerms(checked === true)}
                    />
                    <label htmlFor="terms" className="text-sm text-gray-700">
                      Accetto i <a href="#" className="text-soccer-blue underline">Termini e Condizioni</a> della Scuola Calcio FC Academia, incluse le regole di condotta e partecipazione.
                    </label>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="privacy" 
                      checked={acceptPrivacy} 
                      onCheckedChange={(checked) => setAcceptPrivacy(checked === true)}
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-700">
                      Acconsento al trattamento dei miei dati personali in accordo con la <a href="#" className="text-soccer-blue underline">Privacy Policy</a>.
                    </label>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button type="submit" className="soccer-btn">
                  Procedi al Pagamento
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

export default DocumentUpload;
