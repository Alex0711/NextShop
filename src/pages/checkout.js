import React, { useContext } from 'react';
import Head from 'next/head';
import AppContext from '@context/appContext';
import useSumTotal from '@hooks/useSumTotal';
import CheckoutItem from '@components/CheckoutItem';
import styles from '@styles/Checkout.module.scss';

const Checkout = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <main className={styles.main}>
        <div className={styles['my-order']}>
          <h1 className={styles['my-order-title']}>My order</h1>
          <div className={styles['my-order-container']}>
            <div className={styles['my-order-content']}>
              <p>
                <span className={styles.date}>04.09.2022</span>
                <span className={styles.articles}> {state.cart.length} </span>
              </p>
              <p className={styles.check}>$ {useSumTotal()} </p>
            </div>
          </div>
          <div className={styles['shopping-cart']}>
            {state.cart.map((product) => (
              <CheckoutItem product={product} key={`orderItem-${product.id}`} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Checkout;
