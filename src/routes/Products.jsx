import React, { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import "../stylesheet/Products.css";
import Suunto from "../assets/Suunto.jpg";
import Footer from "../components/Footer";
import { getProducts } from "../data/getProducts.js";

export const loader = () => getProducts();


//sök funktionen på produkt sidan med stora och små bokstäver 
const Products = () => {
	const productData = useLoaderData();
	const [searchValue, setSearchValue] = useState("");
	

	const handleChange = (event) => {
		setSearchValue(event.target.value);
	};

	const filteredProducts = productData.filter((product) =>
		product.name.toLowerCase().includes(searchValue.toLowerCase())
	);

	return (
		<section className="products-body">
			<h2 className="productTitle">Products</h2>

			<input
				onChange={handleChange}
				className="search-input"
				type="text"
				placeholder="Sök på produkt"
			/>

			<div className="grid-container">
				{filteredProducts.map(({ id, name, picture, price }) => (
					<div className="product" key={id}>
						<h3 className="">
							<Link className="products-title" to={`/products/${id}`}>{name}</Link>
						</h3>
						<img
							className="products-pic"
							src={picture}
							alt="bild på produkt"
						/>
						<div className="product-price">
							<p>Pris:{price}kr</p>
						</div>
					</div>
				))}
			</div>

			{/* <Footer /> */}
		</section>
	);
};

export default Products;
