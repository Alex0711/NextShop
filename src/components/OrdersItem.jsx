import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/appContext';
import xImage from '@icons/icon_close.png';
import styles from '@styles/OrdersItem.module.scss';

const ProductItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleClick = item => {
		removeFromCart(item);
	};
  
	return (
		<div className={styles.OrdersItem}>
			<Image src={product.images[0]} alt={product.title}
			width={200}
			height={200}
			/>
			<div className={styles['product-info']}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)} >
					<Image src={xImage} alt="X" />
				</figure>
			</div>
		</div>
	);
};

export default ProductItem;