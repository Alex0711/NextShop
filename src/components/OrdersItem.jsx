import React, { useContext } from 'react';
import '@styles/OrdersItem.scss';
import AppContext from '@context/appContext';
import xImage from '@icons/icon_close.png';

const ProductItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleClick = item => {
		removeFromCart(item);
	}
 
	return (
		<div className="ProductItem-order">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)} >
					<img src={xImage} alt="X" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;