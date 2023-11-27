// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.name === product.name
    );

    if (existingItemIndex !== -1) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const incrementQuantity = (index) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (index) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item, i) =>
        i === index && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (index) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item, i) => i !== index)
    );
  };

  return (
    <Router>
      <div className="container mx-auto p-4">
        <nav className="mb-4">
          <ul className="flex justify-center space-x-4 p-4  bg-gray-800 text-white">
            <li>
              <Link to="/" className="text-blue-500 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/mens_outerwear"
                className="text-blue-500 hover:underline"
              >
                Men's Outerwear
              </Link>
            </li>
            <li>
              <Link
                to="/ladies_outerwear"
                className="text-blue-500 hover:underline"
              >
                Ladies Outerwear
              </Link>
            </li>
            <li>
              <Link
                to="/mens_tshirts"
                className="text-blue-500 hover:underline"
              >
                Men's T-Shirts
              </Link>
            </li>
            <li>
              <Link
                to="/ladies_tshirts"
                className="text-blue-500 hover:underline"
              >
                Ladies T-Shirts
              </Link>
            </li>
            <li>
              <Link to="/cart" className=" text-orange-600 hover:underline">
                Cart
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/mens_outerwear">
            <ProductList category="mens_outerwear" addToCart={addToCart} />
          </Route>
          <Route path="/ladies_outerwear">
            <ProductList category="ladies_outerwear" addToCart={addToCart} />
          </Route>
          <Route path="/mens_tshirts">
            <ProductList category="mens_tshirts" addToCart={addToCart} />
          </Route>
          <Route path="/ladies_tshirts">
            <ProductList category="ladies_tshirts" addToCart={addToCart} />
          </Route>
          <Route path="/cart">
            <Cart
              cartItems={cartItems}
              onIncrement={incrementQuantity}
              onDecrement={decrementQuantity}
              onRemove={removeFromCart}
            />
          </Route>
          <Route path="/product/:name" component={ProductDetails} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const Home = () => (
  <div className="text-center">
    <h2 className="text-3xl font-bold mb-4">Welcome to the Online Store</h2>
    <p className="text-gray-600">
      Choose a category from the navigation to start shopping!
    </p>
    <div className="mb-8">
      <img
        src="https://shop.polymer-project.org/esm-bundled/images/mens_tshirts.jpg"
        alt="Banner 1"
        className="w-full mb-4 rounded"
      />
      <img
        src="https://shop.polymer-project.org/esm-bundled/images/ladies_outerwear.jpg"
        alt="Banner 2"
        className="w-full mb-4 rounded"
      />
    </div>
  </div>
);

export default App;
