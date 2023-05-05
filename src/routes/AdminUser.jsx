import "../stylesheet/AdminUser.css";

const AdminUser = () => {
	return (
		<>
			<section className="Admin-body">
				<div className="title-containee">
					<h2>AdminUser</h2>
					<button className="admin-button">logga ut</button>
				</div>
				<form className="admin-container">
					<h2 className="AdminForm-title">Lägg till Produkter</h2>
					<label className="input-text" htmlFor="">
						<p className="text">Produkt namn</p>
						<input type="text" />
					</label>
					<label htmlFor="">
						<p className="text">Produkt Url</p>
						<input type="text" />
					</label>
					Produkt beskrivning
					<label htmlFor="">
						<textarea name="" id="" cols="30" rows="10"></textarea>
					</label>
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

// <label className="input-text" htmlFor="">
// 						<p className="text">Username</p>
// 						<input
// 							className={
// 								usernameIsValid === false
// 									? "invalid"
// 									: usernameIsValid === true
// 									? "valid"
// 									: ""
// 							}
// 							type="text"
// 							value={username}
// 							onChange={(e) => setUsername(e.target.value)}
// 							onBlur={() => validateUsername()}
// 						/>
// 						{!usernameIsValid && username.length > 0 && (
// 							<p className="error-message">Username = Admin </p>
// 						)}
// 					</label>

// <section className="Admin-Form-Container">
// 				<h1 className="AdminPage">AdminPage</h1>
// 				<button onClick={() => {setShowAdminPage(false)}}>Logga ut</button>
// 				<form onSubmit={handleSubmit} className="my-form">
// 					<h2 className="EditMenu">Redigera Meny alternativ</h2>
// 					<div className="form-input">
// 						<label className="my-label">
// 							Maträttens namn:
// 						</label>
// 							<input
// 								type="text"
// 								value={dishName}
// 								onChange={handleDishNameChange}
// 								className={forDishNameInput}
// 								onBlur={() => setDishNameIsDirty(true)}
// 								onInput={resetDishNameError}/>
// 								<span> {dishNameIsDirty ? dishIsValid : '' }</span>
// 							<span className="dish-error-message">{dishNameIsDirty ? nameFoodErrorMessage : ''}</span>
// 					</div>
// 					<div className="form-input">
// 						<label className="my-label">
// 							Beskrivning av maträtten:
// 						</label>
// 							<textarea
// 								value={dishDescription}
// 								onChange={handleDishDescriptionChange}
// 								onInput={resetTextFoodError}
// 								className="my-text-input"
// 								rows="10" column="100"
// 								minlenght="10" maxlenght="100"
// 								placeholder="Beskriv maträttens ingredienser..." >
// 								</textarea>
// 							<span className="description-error-message">{textFoodIsDirty ? textFoodErrorMessage : '' }</span>
// 					</div>

// 					<div className="form-input">
// 						<label className="my-label">
// 							Länk till bild på maträtten:
// 						</label>
// 							<input
// 								type="text"
// 								value={dishImage}
// 								placeholder="http://..."
// 								onChange={handleDishImageChange}
// 								className={formUrlInput}
// 								onBlur={() => setUrlIsDirty(true)}
// 								onInput={resetUrlError}/>
// 								<span>{urlIsDirty ? urlIsValid : '' }</span>
// 					</div>
// 						<span className="url-error-message">{urlIsDirty ? urlErrorMessage : ''}</span>

// 					<div className="form-price-input">
// 						<label className="my-label">
// 							Lägg till ett pris på maträtten:
// 						</label>
// 							<input
// 								step={10}
// 								type="number"
// 								value={dishPrice}
// 								onChange={handleDishPriceChange}className={formPriceInput}
// 								onBlur={() => setPriceIsDirty(true)}
// 								onInput={resetPriceError}/>
// 								<span>{priceIsDirty ? priceIsvalid : ''}</span>
// 					</div>
// 					<div className="price-message">
// 						<span className="price-error-message">{priceIsDirty ? priceErrorMessage : ''}</span>
// 					</div>

// 					<button type="submit" className="save-btn">
// 						Lägg till
// 					</button>
// 					<div>
// 						{submitMessageAdminPage && <p className="submit-food-meddelande">{submitMessageAdminPage}</p>}
// 					</div>

// 				</form>
// 			</section>
// 			<section className="MenuPageContainer">
// 				{importedMenu &&
// 					importedMenu.map((item, index) => (
// 						<div className="MenuItem" key={index}>
// 							<h3 className="adminMeny-Title">{item.namn}</h3>
// 							<img className="AdminPic" src={item.bild} alt="Bild på mat"
// 							/>
// 							<div className="item-description">
// 								<p className="mobile-para-description">{item.beskrivning}</p>
// 							</div>
// 							<div>
// 								<p className="price">{item.price} kr </p>
// 							</div>

// 							{ isEditing && edit === index ? (
//    								 <>
//      						 <input
// 							  	className="edit-input"
//        							type="text"
// 								name="newTextName"
//         						value={newTextName}
//         						onChange={handleInputEditChange}/>

//    								 </>
//   							) : ( null
//     						// <h3 className="adminMeny-Title">{item.namn}</h3>
//   							)}
// 						{ isEditing && edit === index ? (
// 						<>
//      						 <input
// 							  className="edit-input"
//        							type="text"
// 								name="newImage"
//         						value={newImage}
//         						onChange={handleInputEditChange}/>

//    								 </> ) : (

// 							// <figure
// 							// className="AdminPic"
// 							// 	style={{
// 							// 		width: "50%",
// 							// 		height: "200px",
// 							// 		backgroundImage:  `url(${item.bild})`,
// 							// 		backgroundPosition: "center",
// 							// 		backgroundSize: "cover",
// 							// 	}}
// 							// />
// 							null  )}

// 								{ isEditing && edit === index ? (
// 									<>
// 									<textarea
// 									className="edit-input"
// 									  name="newTextDescription"
// 									  value={newTextDescription}
// 									  onChange={handleInputEditChange}/>

// 										  </> ) : (
// 										//   <p className="mobile-para-description">{item.beskrivning}</p>
// 										null
// 								)}

// 								{ isEditing && edit === index ? (
// 									<>
// 									<input
// 									  className="edit-input"
// 									  type="text"
// 									  name="newPrice"
// 									  value={newPrice}
// 									  onChange={handleInputEditChange}/><div>
// 									<button
// 										className="save-edit-btn"
// 										onClick={handleSaveChanges}>Spara</button>
// 										</div>
// 										  </>
// 										   ) : (null
// 									// <p>{item.price} kr </p>
// 								)}

// 							<div>
// 								<button
// 									className="edit-btn"
// 									onClick={() => handleEditClick(index)}>
// 									Redigera
// 								</button>
// 								<button
// 									className="delete-btn"
// 									onClick={() => handleDelete(item)}>
// 									Ta bort
// 								</button>
// 							</div>
// 						</div>
// 					))}
// 			</section>
