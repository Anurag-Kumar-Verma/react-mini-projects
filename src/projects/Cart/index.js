import React from 'react';
import { CartAppProvider } from './context';
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import './style.css';

function CartApp() {
  // const { loading } = useGlobalContext();
  // console.log(loading);
//   if (state.loading) {
//     return (
//       <div className='loading'>
//         <h1>Loading...</h1>
//       </div>
//     )
//   }
  return (
    <CartAppProvider>
        <main>
            <Navbar />
            <CartContainer />
        </main>
    </CartAppProvider>
  )
}

export default CartApp