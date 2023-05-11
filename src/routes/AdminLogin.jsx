import paradise from "../assets/paradise.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
// import {addUser} from "../data/addUser";
import addUser from "../data/addUser.js";
import "../stylesheet/AdminLogin.css";
// import '../stylesheet/Home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { shopId } from "../data/constants";
// import { getUsers } from "../data/getUsers";

export const loader = () => addUser();

const AdminLogin = () => {
	const [form, setForm] = useState("login");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [registerUsername, setRegisterUsername] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
	const [registerRepeatPassword, setRegisterRepeatPassword] = useState("");

	const [usernameIsValid, setUsernameIsValid] = useState(null);
	const [passwordIsValid, setPasswordIsValid] = useState(null);

	const formIsValid = usernameIsValid && passwordIsValid;

	const navigate = useNavigate();

	function handleRegister(e) {
		// const history = useHistory();
		e.preventDefault();
		if (registerUsername) {
			if (registerPassword === registerRepeatPassword) {
				addUser({
					shopid: shopId,
					username: registerUsername,
					password: registerPassword,
				});
				console.log("nu har du lagt till användare");
				navigate("/admin/user", { state: { isAuthorized: true } });
			}
		}
	}

	// function checkUsers() {
	// 	console.log(getUsers());
	// }
	// checkUsers();

	function setFormLogin() {
		setForm("login");
	}
	function setFormRegister() {
		setForm("register");
	}

	const validateUsername = () => {
		if (username.length === 0) {
			setUsernameIsValid(null);
			// Återställ usernameIsValid till null om username-inputfältet är tomt
		} else if (username !== "admin") {
			setUsernameIsValid(false);
		} else {
			setUsernameIsValid(true);
		}
	};

	const validatePassword = () => {
		if (password.length === 0) {
			setPasswordIsValid(null);
		} else if (password !== "password") {
			setPasswordIsValid(false);
		} else {
			setPasswordIsValid(true);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault(); //förhindra sidan att laddas om vid submit
		if (formIsValid) {
			console.log("Admin logged in successfully");
			// navigate
		} else {
			console.log("Admin login failed");
			// visa felmeddelande för användaren
		}
	};

	return (
		<div className="admin-pic">
			{form === "login" ? (
				<form
					className="form-container"
					onSubmit={(e) => handleSubmit(e)}
				>
					<div className="close-button">
						<Link className="" to="/">
							<FontAwesomeIcon icon={faTimes} />
						</Link>
					</div>
					<div className="Admin-Login">
						<a
							className="AdminLogin-title bold"
							onClick={() => setFormRegister()}
						>
							Login
						</a>
						<a
							className="AdminLogin-title"
							onClick={() => setFormRegister()}
						>
							Registrera konto
						</a>
					</div>
					<div className="label-container">
						<label className="input-text" htmlFor="">
							<p className="text">Användarnamn</p>
							<input
								className={
									usernameIsValid === false
										? "invalid"
										: usernameIsValid === true
										? "valid"
										: ""
								}
								type="text"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								onBlur={() => validateUsername()}
							/>
							{!usernameIsValid && username.length > 0 && (
								<p className="error-message">
									Username = Admin{" "}
								</p>
							)}
						</label>

						<label htmlFor="">
							<p className="text">Lösenord</p>
							<input
								className={
									passwordIsValid === false
										? "invalid"
										: passwordIsValid === true
										? "valid"
										: ""
								}
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								onBlur={() => validatePassword()}
							/>
							{!passwordIsValid && password.length > 0 && (
								<p className="error-message">
									Password = password{" "}
								</p>
							)}
							{passwordIsValid}
						</label>
					</div>
					<button
						type="submit"
						className="admin-button"
						onClick={
							formIsValid
								? () => {
										navigate("/admin/user");
								  }
								: null
						}
						disabled={!formIsValid}
					>
						Logga in
					</button>
				</form>
			) : (
				<form
					className="form-container"
					onSubmit={(e) => handleRegister(e)}
				>
					<div className="close-button">
						<Link className="" to="/">
							<FontAwesomeIcon icon={faTimes} />
						</Link>
					</div>
					<div className="Admin-Login">
						<a
							className="AdminLogin-title"
							onClick={() => setFormLogin()}
						>
							Login
						</a>
						<a
							className="AdminLogin-title bold "
							onClick={() => setFormRegister()}
						>
							Registrera konto
						</a>
					</div>
					<div className="label-container">
						<label className="input-text" htmlFor="">
							<p className="text">Användarnamn</p>
							<input
								className={
									usernameIsValid === false
										? "invalid"
										: usernameIsValid === true
										? "valid"
										: ""
								}
								type="text"
								value={registerUsername}
								onChange={(e) =>
									setRegisterUsername(e.target.value)
								}
							/>
						</label>
						<label htmlFor="">
							<p className="text">Lösenord</p>
							<input
								className={
									passwordIsValid === false
										? "invalid"
										: passwordIsValid === true
										? "valid"
										: ""
								}
								type="password"
								value={registerPassword}
								onChange={(e) =>
									setRegisterPassword(e.target.value)
								}
							/>
						</label>
						<label htmlFor="">
							<p className="text">Upprepa lösenord</p>
							<input
								className={
									passwordIsValid === false &&
									registerPassword.length < 7
										? "invalid"
										: passwordIsValid === true
										? "valid"
										: ""
								}
								type="password"
								value={registerRepeatPassword}
								onChange={(e) =>
									setRegisterRepeatPassword(e.target.value)
								}
							/>
						</label>
					</div>
					<button
						type="submit"
						className="admin-button button"
						onClick={handleRegister}
						disabled={
							!registerUsername ||
							!registerPassword ||
							!registerRepeatPassword ||
							registerPassword !== registerRepeatPassword
						}
					>
						Registrera / logga in
					</button>
				</form>
			)}

			<Footer />
		</div>
	);
};

export default AdminLogin;
