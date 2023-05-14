import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cartState } from "../atoms/cartState";
import "../stylesheet/ShoppingCart.css";

function ShoppingCart() {
	const [cartItems, setCartItems] = useRecoilState(cartState);
	const setCart = useSetRecoilState(cartState);
	const allProducts = useLoaderData();
	const navigate = useNavigate();
	const [handleMessage, setHandleMessage] = useState("");

	function handleAddToCart(index) {
		setCartItems((prevCartItems) =>
			prevCartItems.map((cartItem) =>
				cartItem.id === cartItems[index].id
					? { ...cartItem, amount: cartItem.amount + 1 }
					: cartItem
			)
		);
	}

	function payGoToHome() {
		navigate("/");
	}

	function handleClearCart() {
		setCart([]);
	}

	function handleRemoveFromCart(index) {
		if (cartItems[index].amount === 1) {
			setCartItems((prevCartItems) =>
				prevCartItems.filter((item) => item.id !== cartItems[index].id)
			);
		} else if (cartItems[index].amount > 1) {
			setCartItems((prevCartItems) =>
				prevCartItems.map((cartItem) =>
					cartItem.id === cartItems[index].id
						? { ...cartItem, amount: cartItem.amount - 1 }
						: cartItem
				)
			);
		}
	}

	function handleRemoveFromCart(index) {
		if (cartItems[index].amount === 1) {
			setCartItems((prevCartItems) =>
				prevCartItems.filter((item) => item.id !== cartItems[index].id)
			);
		} else if (cartItems[index].amount > 1) {
			setCartItems((prevCartItems) =>
				prevCartItems.map((cartItem) =>
					cartItem.id === cartItems[index].id
						? { ...cartItem, amount: cartItem.amount - 1 }
						: cartItem
				)
			);
		}
	}
	function handleRemoveAll(index) {
		// remove all knappen
		setCart((prevCartItems) =>
			prevCartItems.filter((item) => item.id !== cartItems[index].id)
		);
	}

	const totalPrice = cartItems.reduce(
		(sum, item) => sum + item.price * item.amount,
		0
	);

	return (
		<div className="shopping-container">
			<h2 className="cartTitle">Kundvagn</h2>
			<ul className="cart-list">
				{cartItems.map((item, index) => (
					<li className="list-item" key={index}>
						<div className="title-price-container">
							<p>{item.name}</p>
							<p className="price">{item.price * item.amount}</p>
						</div>

						<button
							className="btn"
							onClick={() => handleRemoveFromCart(index)}
						>
							-
						</button>

						<p className="amount">{item.amount}</p>

						<button
							className="btn"
							onClick={() => handleAddToCart(index)}
						>
							+
						</button>

						<button
							className="btn btn-remove"
							onClick={() => handleRemoveAll(index)}
						>
							Ta bort alla
						</button>
					</li>
				))}
			</ul>
			<p className="Totalprice">Totalt: {totalPrice} Kr</p>

			<button className="detail-button" onClick={payGoToHome}>Betala </button>

			<button className="detail-button" onClick={handleClearCart}>
				Töm kundvagn
			</button>
		</div>
	);
}

export default ShoppingCart;
