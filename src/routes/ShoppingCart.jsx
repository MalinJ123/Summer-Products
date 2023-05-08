
import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const allProducts = useLoaderData();

  function handleAddToCart(product) {
    const newCartItem = {
      name: product.name,
      image: product.picture,
      price: product.price,
    };
    setCartItems([...cartItems, newCartItem]);
  }

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Shopping cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {/* <img src={item.image} alt={item.name} /> */}
            <p>{item.name}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
      <p>Total price: {totalPrice} Kr</p>
      {allProducts.map((product) => (
        <ProductDetails
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}

export default ShoppingCart;