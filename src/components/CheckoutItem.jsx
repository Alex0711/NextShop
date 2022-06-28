import React from 'react';
import '../styles/CheckoutItem.scss'

const CheckoutItem = () => {
  return(
    <div>
      <figure className="product">
        <div>
          <img src="./imgs/bike.jpeg" alt="bike" className="product-img" />
          <p className="product-name">Bike</p>
        </div>
        <p className="product-price">$120</p>
      </figure>
    </div>
  )
}

export default CheckoutItem;