import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import AccordionApp from './projects/Accordion';
import reportWebVitals from './reportWebVitals';
// import TabsApp from './projects/Tabs';
// import SliderApp from './projects/Slider';
// import ColorGenerator from './projects/Color-generator';
// import GroceryApp from './projects/Grocery-buds';
// import NavbarApp from './projects/Navbar';
// import SidbarModalApp from './projects/Sidebar-modal';
// import StripeSubmenuApp from './projects/Stripe-submenus';
import CartApp from './projects/Cart';
// import MenuApp from './projects/Menu';
// import ToursApp from './projects/Tours/Tours';
// import ReviewApp from './projects/Reviews';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <ReviewApp />
    <AccordionApp />
    <MenuApp />
    <ToursApp />
    <TabsApp />
    <SliderApp />
    <ColorGenerator />
    <GroceryApp />
    <NavbarApp />
    <SidbarModalApp />
    <StripeSubmenuApp /> */}
    <CartApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
