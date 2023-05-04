import React from "react";
import { useActionData } from "react-router-dom";
import { useLoaderData, Link } from "react-router-dom";
import "../stylesheet/Products.css";
import Suunto from "../assets/Suunto.jpg";
import Footer from "../components/Footer";
import {getProducts} from '../data/getProducts.js'


export const loader = () => getProducts()

const Products = () => {
	const productData = useLoaderData();
	return (
		<section className="products-body">
			<h2 className="productTitle">Products</h2>
			<div className="grid-container">
				{productData.map(({ id, name, picture, price }) => (
					<div className="product" key={id}>
						<h3 className="products-title">
							<Link to={`/details/${id}`}>{name}</Link>
						</h3>
						<img
							className="products-pic"
							src={picture}
							alt="bild på produkt"
						/>
						{/* <p className="empty">{description}</p> */}
						<div className="product-price">
							<p>Pris:{price}kr</p>
						</div>
					</div>
				))}
			</div>
		
		</section>
	);
};

export default Products;
