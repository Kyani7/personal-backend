import React from 'react';
import { Navbar } from './Component/Navbar';
import { Head } from './Component/Head';
import { Body1 } from './Component/Body1';
import { Footer } from './Component/Footer';
import '../index.css';

const Main: React.FC = () => {
  return (
    <>
      <Navbar />
      <Head />
      <Body1 />
      <Footer />
    </>
  );
};

export default Main;