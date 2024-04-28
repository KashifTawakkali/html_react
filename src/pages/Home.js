import React from 'react';
import Hero from '../components/Hero';
import About from './AboutUs';
import Services from './Services';
import Contact from './ContactUs';
import { Team } from './Team';
import Clients from './Client';

const Home = () => {
  return (
   <><Hero /><Clients/><About /><Services/><Team/><Contact/></>
  );
};

export default Home;
