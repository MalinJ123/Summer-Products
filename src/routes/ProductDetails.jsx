import React from "react";
import { useLoaderData, useParams, Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { cartState } from "../atoms/cartState";

function ProductDetails(props) {
	// const { id } = useParams();
	const product = props.product;
	const [cartItems, setCartItems] = useRecoilState(cartState);

	function handleAddToCart() {
		console.log(product.id);
		const existingItem = cartItems.find(
			(cartItem) => cartItem.id === product.id
		);

		if (existingItem) {
			const updatedCartItems = cartItems.map((cartItem) =>
				cartItem.id === product.id
					? { ...cartItem, amount: cartItem.amount + 1 }
					: cartItem
			);
			setCartItems(updatedCartItems);
			console.log("updated item with new amount");
		} else {
			setCartItems([...cartItems, { ...product, amount: 1 }]);
			console.log("added new item");
		}
	}
	if (!product) {
		return (
			<section>
				<h2>No Product</h2>
				<p>Please check the URL again</p>
				<p>
					<Link to="/products">Tillbaka</Link>
				</p>
			</section>
		);
	}

	return (
		<>
			<p className="button-container">
				<button className="detail-button">
					<Link className="link-btn" to="/products">
						Tillbaka
					</Link>
				</button>
			</p>
			<section className="product-container">
				<div className="wrapper">
					<h2 className="detail-title">{product.name}</h2>
					<img
						className="detail-pic"
						src={product.picture}
						alt="bild på produkt"
					/>
					<div className="p-price-container">
						<p className="detail-description">
							{product.description}
						</p>
						<p className="detail-price">{product.price} Kr</p>
					</div>
					<button
						className="detail-button"
						onClick={() => handleAddToCart()}
					>
						Lägg till
					</button>
				</div>
			</section>
		</>
	);
}

export default ProductDetails;
