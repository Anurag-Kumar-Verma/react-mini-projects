import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
import { StripeAppProvider } from './context';
import './style.css';
function StripeSubmenuApp() {
  return (
    <StripeAppProvider>
        <Navbar />
        <Sidebar />
        <Hero />
        <Submenu />
    </StripeAppProvider>
  );
}

export default StripeSubmenuApp;