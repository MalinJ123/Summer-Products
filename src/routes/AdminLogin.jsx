import paradise from "../assets/paradise.jpg";
import { useLoaderData, useParams, Link, useNavigate } from "react-router-dom";
import "../stylesheet/AdminLogin.css";
// import '../stylesheet/Home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const AdminLogin = () => {
	return (
		<>
			<img
				className="admin-pic"
				src={paradise}
				alt="En härlig paradis bild"
			/>
			<form className="form-container" action="">
				<div className="close-button">
					{" "}
					<Link className="" to="/">
						<FontAwesomeIcon icon={faTimes} />
					</Link>
				</div>
				<h2 className="AdminLogin-title">Admin login</h2>
				<div className="label-container">
					<label className="input-text" htmlFor="">
						<p className="text">Username</p>
						<input className="input" type="text" />
					</label>
					<label htmlFor="">
						<p className="text">Password</p>
						<input className="input" type="text" />
					</label>
				</div>
				<button className="admin-button">
					<Link className="link-btn" to="/">
						Tillbaka
					</Link>
				</button>
			</form>
		</>
	);
};
export default AdminLogin;
