import { useState } from 'react';

const initialState = {
  //por defecto, elestado inicial es un carrito
  cart: [],
};

const useInitailState = () => {
  const [state, setState] = useState(initialState); //uso el carrito para arrancar

  const addToCart = (payload) => {
    //payload se le suele llamar al producto
    setState({
      //modifico el estado actual
      ...state, //tomo el estado actual
      cart: [...state.cart, payload], //y le agrego el producto nuevo
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id != payload.id),
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
  };
};

export default useInitailState;
