import React from 'react';
import '../styles/Orders.scss'
import OrdersItem from '../components/OrdersItem';

const Orders = () => {
  return(
    <main class="my-order">
      <h1 class="my-order-title">My orders</h1>
      <div class="my-order-container">
        <OrdersItem />
        <OrdersItem />
        <OrdersItem />
      </div>
    </main>
  )
}

export default Orders