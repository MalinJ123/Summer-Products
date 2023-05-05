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
