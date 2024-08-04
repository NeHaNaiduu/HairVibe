import React from 'react';
import Hero from '../components/Hero';
import Mains from '../components/Mains';
import Markline from '../components/Markline';
import Transformation from '../components/Transformation';
import Best from '../components/Best';
import Demos  from '../components/Demos';
import About from '../components/About';


const Home = () => {
  return (
    <main className='overflow-x-hidden antialiased'>
      <Hero />
      <Mains />
      <Markline />
      <Demos/>
      <About/>
      <Transformation />
      <Best />
    </main>
  );
};

export default Home;