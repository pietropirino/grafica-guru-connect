
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="intro" className="hero-pattern min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col items-center text-center">
          <div className="bg-soccer-red px-4 py-2 rounded-full inline-block mb-6">
            <span className="text-white font-semibold">Iscrizioni Aperte 2025-2026</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Scuola Calcio <span className="text-soccer-gold">FC Academia</span></h1>
          <p className="text-xl text-white max-w-2xl mb-12">
            Dove i giovani talenti crescono e si sviluppano. Una formazione calcistica d'eccellenza per ragazzi dai 5 ai 16 anni.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/documents" className="soccer-btn-red">
              Inizia Iscrizione
            </Link>
            <a href="#details" className="bg-white hover:bg-opacity-90 text-soccer-blue font-bold py-3 px-6 rounded-lg transition-all duration-300">
              Scopri di Più
            </a>
          </div>
          <div className="mt-16 animate-bounce-subtle">
            <a href="#details" className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
