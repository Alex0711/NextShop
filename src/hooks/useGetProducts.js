import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get(API); //Esto hace una petición tipo get
      setProducts(response.data);
    }
    getProducts();
  }, [API]); //cada vez que API cambie se hará un llamado
  return products;
};

export default useGetProducts;
