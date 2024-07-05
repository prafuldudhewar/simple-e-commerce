// RelatedProduct.js
import React from 'react';
import './RelatedProduct.css';
import data_product from '../Assests/data';
import Item from '../Item/Item';

const RelatedProduct = ({ selectedProductId }) => {
  const selectedProduct = data_product.find(product => product.id === selectedProductId);
  if (!selectedProduct) {
    return <p>Product not found.</p>;
  }
  
  const relatedProducts = data_product.filter(
    product => product.category === selectedProduct.category && product.id !== selectedProductId
  );

  return (
    <div className='relatedproduct'>
      {/* <h1>{selectedProduct.name}</h1> */}
      <h2>Related Products</h2>
      <hr />
      <div className="relatedproduct-item">
        {relatedProducts.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.new_price} new_price={item.old_price} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
