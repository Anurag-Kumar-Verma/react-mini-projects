import React, { useContext, useReducer, useEffect } from 'react'
import { apiData, data } from './data'
import reducer from './reducer'
const CartAppContext = React.createContext()

const initialState = {
  loading: false,
  cart: data,
  total: 0,
  amount: 0,
}

const CartAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }
  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }
  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    const cart = apiData
    dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
  }
  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
  }
  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
  }, [state.cart])
  return (
    <CartAppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        toggleAmount,
      }}
    >
      {children}
    </CartAppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(CartAppContext)
}

export { CartAppContext, CartAppProvider }