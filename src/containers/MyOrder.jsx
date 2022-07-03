import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import OrderItem from '../components/OrdersItem';
import AppContext from '@context/appContext';
import useSumTotal from '../hooks/useSumTotal.js'
import arrow from '@icons/flechita.svg';
import styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {
	const { state } = useContext(AppContext);
	 
	return (
		<aside className={styles.MyOrder}>
			<div className={styles['title-container']}>
				<Image src={arrow} alt="arrow" />
				<p className={styles.title}>My order</p>
			</div>
			<div className={styles['my-order-content']}>
				{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
				))}
				<div className={styles.order}>
					<p>
						<span>Total</span>
					</p>
					<p>$ {useSumTotal()} </p>
				</div>
				<button className={ styles['primary-button'] }>
					<Link className={styles['link']} 
					href="/checkout"
					style="text-decoration: none"
					>
						Checkout	
					</Link>
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;