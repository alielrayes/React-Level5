import React from 'react';
import  './product-details.css';
import { useGetOneProductQuery } from 'Redux/productsApi';
const ProductDetails = () => {
  const { data, error, isLoading } = useGetOneProductQuery(4);
  console.log(data)
if (data) {
  return (
    <div>
    product id :  {data.id}
    </div>
  );
}
}

export default ProductDetails;
