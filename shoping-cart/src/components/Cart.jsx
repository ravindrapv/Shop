// Cart.js
import React from "react";

const Cart = ({ cartItems, onIncrement, onDecrement, onRemove }) => {
  // Calculate the total amount
  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cartItems.map((item, index) => (
              <li key={index} className="bg-white p-4 rounded shadow">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onDecrement(index)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      -
                    </button>
                    <span className="font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => onIncrement(index)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      +
                    </button>
                    <button
                      onClick={() => onRemove(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="text-xl font-semibold">
              Total: ${calculateTotalAmount().toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
