import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../stylesheet/AdminUser.css";
// import AdminProducts from "./AdminProducts";
import addProduct from "../data/addProducts.js";



const AdminUser = () => {
	const [products, setProducts] = useState([]);
	const [isFieldTouched, setIsFieldTouched] = useState(false);
	const [isFieldEmpty, setIsFieldEmpty] = useState(false);

	const [productPrice, setProductPrice] = useState("");
	const [productUrl, setProductUrl] = useState("");

	// TITEL
	const [title, setTitle] = useState("");
	const [titleIsValid, setTitleIsValid] = useState(false);

	// Beskrivning
	const [description, setDescription] = useState("");
	const [descriptionIsValid, setDescriptionIsValid] = useState(false);

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
		if (title.trim() === '' || description.trim() === '') {
		  setIsFieldEmpty(true);
		} else {
		  setIsFieldEmpty(false);
		}
		if (title.length < 5) {
		  setTitleIsValid('Atleast 5 characters');
		} else {
		  setTitleIsValid(false);
		}
		if (description.length < 10) {
		  setDescriptionIsValid('Atleast 10 characters');
		} else {
		  setDescriptionIsValid(false);
		}
	 }
	 
	function handleClick() {
		console.log("btn is clicked");
		console.log(products);
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

			// { name, price, description, picture, shopid }
		});
	}

	const navigate = useNavigate();

	function handleLogout() {
		navigate("/admin");
	}

	return (
		<>
			<section className="Admin-body">
				<div className="title-container">
					<h2>AdminUser</h2>
					<button className="admin-button" onClick={handleLogout}>
						logga ut
					</button>
				</div>

				{/* TITEL */}
				<form className="admin-container" onSubmit={handleSubmit}>
					<h2 className="AdminForm-title">Lägg till Produkter</h2>
					<label className="input-text" htmlFor="">
						<p className="text">Produkt Titel</p>
						<input
							type="text"
							placeholder="Produkt namn"
							value={title}
							onChange={handleTitleChange}
							onBlur={handleBlur}
							className={
								isFieldTouched &&
								(isFieldEmpty || !!titleIsValid)
									? "invalid"
									: ""
							}
						/>
						{isFieldTouched &&
							!!titleIsValid && ( // should check if titleIsValid is not false
								<span className="error-message">
									{titleIsValid}
								</span>
							)}
					</label>
					{/* LÄÄÄNK BILD URL */}
					<label htmlFor="">
						<p className="text">Produkt Url</p>
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

					{/* Produkt BESKRIVNING */}
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
								isFieldTouched &&
								(isFieldEmpty || !!descriptionIsValid)
									? "invalid"
									: ""
							}
						/>
						{isFieldTouched && !!descriptionIsValid && (
							<span className="error-message">
								{descriptionIsValid}
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

					<button className="admin-details">
						<Link to="/admin/products">
							{" "}
							Gå till Admin Produkt{" "}
						</Link>
					</button>
				</form>
			</section>
		</>
	);
};

export default AdminUser;
