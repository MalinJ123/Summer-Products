import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../stylesheet/AdminUser.css";
import addProduct from "../data/addProducts.js";
import getUsers from "../data/getUsers";
import { useLoaderData } from "react-router-dom";

export const loader = () => getUsers();
const AdminUser = () => {
	console.log("getUsers innehåller", getUsers());
	//getUsers innehåller undefined.
	//oneUser innehåller shopid, registerUsername, och registerPassword. Men infon försvinner i getUser/addUser
	//map()kan inte ut värden, eftersom den står som undefined, alltså tom.
	const [users, setUsers] = useState(useLoaderData());
	const [editUsers, setEditUsers] = useState({});

	const [products, setProducts] = useState([]);
	const [isFieldTouched, setIsFieldTouched] = useState(false);
	const [isFieldEmpty, setIsFieldEmpty] = useState(false);

	const [productPrice, setProductPrice] = useState("");
	const [productUrl, setProductUrl] = useState("");

	// TITEL
	const [title, setTitle] = useState("");
	const [titleIsValid, setTitleIsValid] = useState("");
	const [titleIsInValid, setTitleIsInValid] = useState("");

	// Beskrivning
	const [description, setDescription] = useState("");
	const [descriptionIsValid, setDescriptionIsValid] = useState("");
	const [descriptionIsInvalid, setDescriptionIsInvalid] = useState("");

	const [message, setMessage] = useState("");

	const navigate = useNavigate();
	const location = useLocation();

	function handleTitleChange(event) {
		setTitle(event.target.value);
	}

	function handleUrlChange(event) {
		setProductUrl(event.target.value);
	}

	function handleDescriptionChange(event) {
		setDescription(event.target.value);
	}

	function handlePriceChange(event) {
		const onlyNumbers = event.target.value.replace(/[^0-9]/g, "");
		setProductPrice(onlyNumbers);
	}

	function handleBlur() {
		setIsFieldTouched(true);

		if (title.trim() === "") {
			setTitleIsInValid("Title is required");
			setTitleIsValid("");
		} else if (title.length < 5) {
			setTitleIsInValid("At least 5 characters long");
			setTitleIsValid("");
		} else {
			setTitleIsValid("valid");
			setTitleIsInValid("");
		}

		if (description.trim() === "") {
			setDescriptionIsInvalid("Description is required");
			setDescriptionIsValid("");
		} else if (description.length < 10) {
			setDescriptionIsInvalid(
				"At least 10 characters long"
			);
			setDescriptionIsValid("");
		} else {
			setDescriptionIsValid("valid");
			setDescriptionIsInvalid("");
		}
	}

	function handleClick() {
		console.log("btn is clicked");
		console.log(products);
		setMessage("Produkten är tillagd");
	}

	function handleDeleteForm() {
		setTitle("");
		setProductUrl("");
		setDescription("");
		setProductPrice("");
		setMessage("");
	}

	function handleSubmit(event) {
		event.preventDefault();
		const product = { title, productUrl, description, price: productPrice };
		console.log("submit körs");
		setProducts([...products, product]);
		addProduct({
			name: title,
			price: productPrice,
			description: description,
			picture: productUrl,
		});
	}

	function handleLogout() {
		navigate("/admin");
	}

	function handleDeleteUser(id) {
		console.log("denna ska ta bort user");
		setUsers(users.filter((user) => user.id !== id));
	}

	return (
		<>
			<section className="Admin-body">
				<div className="title-container">
					<h2 className="AdminForm-title">AdminUser</h2>
					<button className="admin-button" onClick={handleLogout}>
						logga ut
					</button>
				</div>
				<div className="AdminUsers">
					<p className="title">Alla Användare:</p>
					{users.map((user) => (
						<div className="UserContainer" key={user.id}>
							<p className="">{user.username}</p>
							<div className="deleteUserBtn-container">
								<button
									className="deleteUser"
									onClick={() => handleDeleteUser(user.id)}
								>
									Ta bort
								</button>
							</div>
						</div>
					))}
				</div>

				{/* TITEL */}
				<form className="admin-container" onSubmit={handleSubmit}>
					<h2 className="AdminForm-title">Lägg till Produkter</h2>
					<label className="input-text" htmlFor="">
						<p className="text">Produkt namn</p>
						<input
							type="text"
							placeholder="Produkt namn"
							value={title}
							onChange={handleTitleChange}
							onBlur={handleBlur}
							className={
								isFieldTouched
									? isFieldEmpty || !!titleIsInValid
										? "invalid"
										: titleIsValid
									: ""
							}
						/>
						{isFieldTouched && !!titleIsInValid && (
							<span className="error-message">
								{titleIsInValid}
							</span>
						)}
					</label>
					{/* LÄÄÄNK BILD URL */}
					<label htmlFor="">
						<p className="text">Bildadress</p>
						<input
							placeholder=" https://"
							type="text"
							value={productUrl}
							onChange={handleUrlChange}
						/>
						{productUrl && (
							<img className="AdminUrl" src={productUrl} alt="" />
						)}
					</label>

					{/* BESKRIVNING  */}
					<label htmlFor="">
						<p className="text">Produkt beskrivning</p>
						<textarea
							name=""
							placeholder="Beskriv produkten ni säljer"
							id=""
							cols="30"
							rows="6"
							type="text"
							value={description}
							onChange={handleDescriptionChange}
							onBlur={handleBlur}
							className={
								isFieldTouched
									? isFieldEmpty || !!descriptionIsInvalid
										? "Isinvalid"
										: descriptionIsValid
									: ""
							}
						/>
						{isFieldTouched && !!descriptionIsInvalid && (
							<span className="error-message">
								{descriptionIsInvalid}
							</span>
						)}
					</label>

					{/* PRIS  */}
					<label htmlFor="">
						<p className="text">Pris (kr)</p>
						<input
							type="text"
							placeholder="121"
							value={productPrice}
							onChange={handlePriceChange}
						/>
					</label>
					<button
						type="submit"
						className="adminFormBtn"
						onClick={handleClick}
					>
						Lägg till
					</button>
					<p className="message">{message}</p>
					<div className="formbtns">
						<button className="deleteForm">
							<Link to="/admin/products">
								Gå till Admin Produkt
							</Link>
						</button>
						<button
							type="submit"
							className="deleteForm"
							onClick={handleDeleteForm}
						>
							Rensa formulär
						</button>
					</div>
				</form>
			</section>
		</>
	);
};
export default AdminUser;
