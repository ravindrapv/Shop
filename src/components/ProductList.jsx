// ProductList.js
import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ category, addToCart }) => {
  const products = require(`../data/${category}.json`);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{category.replace("_", " ")}</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <li key={product.name} className="bg-white p-4 rounded shadow">
            <Link to={`/product/${product.name}`} className="block mb-2">
              <img
                src={`https://shop.polymer-project.org/esm-bundled/${product.image}`}
                alt={product.title}
                className="w-full  object-cover object-center"
              />
              <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
              <p className="text-gray-600">${product.price}</p>
            </Link>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
