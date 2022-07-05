import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/appContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import Styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);
	
	console.log({'hola':'mundo'});
  
	return (
		<div className={Styles.ProductItem}>
			<Image
			src={product.images[0]} 
			alt={product.title}
			width={240}
			height={240}
			layout="responsive" 
			/>
			<div className={Styles["product-info"]}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => addToCart(product)} >
					<Image src={addToCartImage} alt="AddToCart" />
				</figure>
			</div>
		</div>
	);
};

export default ProductItem;