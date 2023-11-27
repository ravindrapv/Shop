import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  // Assuming you have your product data in separate JSON files
  const product = require(`../data/${id}.json`);

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.largeImage} alt={product.title} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      {/* Add to Cart button or form */}
    </div>
  );
};

export default ProductDetails;
