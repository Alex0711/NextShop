import React, { useContext } from 'react';
import AppContext from '@context/appContext';

const useSumTotal = () => {
    const { state } = useContext(AppContext)
    return (state.cart.reduce((a, b) => a + b.price, 0))
}

export default useSumTotal;