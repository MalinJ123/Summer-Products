import "../stylesheet/AdminUser.css";
import { useState } from "react";

const AdminUser = () => {
	const [isFieldTouched, setIsFieldTouched] = useState(false);
	const [isFieldEmpty, setIsFieldEmpty] = useState(false);

	// TITEL
	const [title, setTitle] = useState("");
	const [titleIsValid, setTitleIsValid] = useState(false); // should be a boolean

	// Beskrivning
	const [description, setDescription] = useState(""); // typo in the variable name
	const [descriptionIsValid, setDescriptionIsValid] = useState(false); // should be a boolean

	function handleTitleChange(event) {
		setTitle(event.target.value);

		if (event.target.value.length < 3) {
			setTitleIsValid("Felmeddelande: minst tre bokstäver");
		} else if (event.target.value.length === 0) {
			// should check the length of the string
			setTitleIsValid(null);
		} else {
			setTitleIsValid("");
		}
	}

	function handleDescriptionChange(event) {
		setDescription(event.target.value);

		if (event.target.value.length < 5) {
			setDescriptionIsValid("Felmeddelande: minst fem bokstäver");
		} else if (event.target.value.length === 0) {
			// should check the length of the string
			setDescriptionIsValid(null);
		} else {
			setDescriptionIsValid("");
		}
	}

	function handleBlur() {
		setIsFieldTouched(true);
	}

	function handleSubmit(event) {
		event.preventDefault();

		// Skicka formulärdata till servern
	}

	return (
		<>
			<section className="Admin-body">
				<div className="title-container">
					<h2>AdminUser</h2>
					<button className="admin-button">logga ut</button>
				</div>

				{/* TITEL */}
				<form className="admin-container" onSubmit={handleSubmit}>
					<h2 className="AdminForm-title">Lägg till Produkter</h2>
					<label className="input-text" htmlFor="">
						<p className="text">Produkt Titel</p>
						<input
							type="text"
							value={title}
							onChange={handleTitleChange}
							onBlur={handleBlur}
							className={
								isFieldTouched &&
								(isFieldEmpty || !!titleIsValid) // should check if titleIsValid is not false or null
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
						<input type="text" />
					</label>
					{/* Produkt BESKRIVNING */}
					<label htmlFor="">
						<p className="text">Produkt beskrivning</p>
						<textarea
							name=""
							id=""
							cols="30"
							rows="6"
							type="text"
							value={description}
							onChange={handleDescriptionChange}
							onBlur={handleBlur}
							className={
								isFieldTouched &&
								(isFieldEmpty || !!descriptionIsValid) // should check if descriptionIsValid is not false or null
									? "invalid"
									: ""
							}
						/>
						{isFieldTouched &&
							!!descriptionIsValid && ( // should check if descriptionIsValid is not false
								<span className="error-message">
									{descriptionIsValid}
								</span>
							)}
					</label>

					{/* PRIS  */}
					<label htmlFor="">
						<p className="text">Produkt Pris</p>
						<input type="text" />
					</label>
					<button className="adminFormBtn">Lägg till </button>
				</form>
			</section>
		</>
	);
};

export default AdminUser;
