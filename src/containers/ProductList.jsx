import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import styles from '@styles/ProductList.module.scss';
  
const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	let products = useGetProducts(API);
	products = products.filter((item)=>{
		if (item.images.length > 1 && item.images[0] !== '') {
			return item
		}
	})
	return (
		<div className={styles.ProductList} >
			{products.map(product => (
				<ProductItem product={product} key={product.id} />
			))}
		</div>
	);
}

export default ProductList;