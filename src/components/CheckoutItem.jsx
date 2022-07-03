import React from 'react';
import Image from 'next/image';
import styles from '@styles/CheckoutItem.module.scss'

const CheckoutItem = ({ product }) => {
  return(
    <div>
      <figure className= {styles.product}>
        <div>
          <Image src={product.images[0]} alt={product.title}
          width={50}
          height={50}
          />
          <p className={styles['product-name']}> {product.title} </p>
        </div>
        <p className={styles['product-price']}>$ {product.price} </p>
      </figure>
    </div>
  )
}

export default CheckoutItem;