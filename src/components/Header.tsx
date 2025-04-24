
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-soccer-blue text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <div className="text-2xl font-bold">
            <span className="text-soccer-gold">FC</span> Academia
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#intro" className="hover:text-soccer-gold transition-colors">Home</a>
          <a href="#details" className="hover:text-soccer-gold transition-colors">Corso</a>
          <a href="#documents" className="hover:text-soccer-gold transition-colors">Iscrizione</a>
          <a href="#contacts" className="hover:text-soccer-gold transition-colors">Contatti</a>
        </nav>
        <Link to="/documents">
          <Button className="soccer-btn-red">Iscriviti Ora</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
