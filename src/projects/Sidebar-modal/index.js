import React from 'react';
import Home from './Home';
import './style.css';
import { SidebarProvider } from './Context';
import Sidebar from './Sidebar';
import Modal from './Modal';

function SidbarModalApp() {
  return (
    <SidebarProvider>
      <Home />
      <Modal />
      <Sidebar />
    </SidebarProvider>
  );
}

export default SidbarModalApp;