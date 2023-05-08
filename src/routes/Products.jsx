import React, { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import "../stylesheet/Products.css";
import Footer from "../components/Footer";
import { getProducts } from "../data/getProducts.js";

export const loader = () => getProducts();

const Products = () => {
  const productData = useLoaderData();
  const [searchValue, setSearchValue] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const filteredProducts = productData.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const sortProductsByName = (products) => {
    if (sortOrder === "alphabetic") {
      return [...products].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "reverse") {
      return [...products].sort((a, b) => b.name.localeCompare(a.name));
    } else {
      return products;
    }
  };

  const sortProductsByPrice = (products) => {
    if (sortOrder === "low-to-high") {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-to-low") {
      return [...products].sort((a, b) => b.price - a.price);
    } else {
      return products;
    }
  };

  const sortedProducts = sortProductsByPrice(sortProductsByName(filteredProducts));

  return (
    <section className="products-body">
      <h2 className="productTitle">Products</h2>

      <div className="search-bar">
        <input
          onChange={handleChange}
          className="search-input"
          type="text"
          placeholder="Search for products"
        />
        <select onChange={handleSortChange} className="sort-dropdown">
          <option value="">Sort</option>
          <option value="alphabetic">A-Z</option>
          <option value="reverse">Z-A</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>

      <div className="grid-container">
        {sortedProducts.map(({ id, name, picture, price }) => (
          <div className="product" key={id}>
            <h3 className="">
              <Link className="products-title" to={`/products/${id}`}>
                {name}
              </Link>
            </h3>
            <img className="products-pic" src={picture} alt="product image" />
            <div className="product-price">
              <p>Price: {price} kr</p>
            </div>
          </div>
        ))}
      </div>

      {/* <Footer /> */}
    </section>
  );
};

export default Products;
