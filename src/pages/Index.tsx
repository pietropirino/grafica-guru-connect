
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CourseDetails from '@/components/CourseDetails';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CourseDetails />
      <Footer />
    </div>
  );
};

export default Index;
