import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import addUser from "../data/addUser.js";
import verifyUser from "../data/verifyUser.js";
import "../stylesheet/AdminLogin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { shopId } from "../data/constants";

export const loader = () => addUser();

const AdminLogin = () => {
	const [form, setForm] = useState("login");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [usernameIsValid, setUsernameIsValid] = useState(null);
	const [passwordIsValid, setPasswordIsValid] = useState(null);

	//Registrera användare
	const [registerUsername, setRegisterUsername] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
	const [registerRepeatPassword, setRegisterRepeatPassword] = useState("");

	const [error, setError] = useState(null);

	const formIsValid = usernameIsValid && passwordIsValid;

	const navigate = useNavigate();

	function handleRegister(e) {
		e.preventDefault();
		if (registerUsername) {
			if (registerPassword === registerRepeatPassword) {
				addUser({
					shopid: shopId,
					username: registerUsername,
					password: registerPassword,
				});
				console.log("nu har du lagt till användare");
				navigate("/admin/user");
			}
		}
	}

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

	const handleLogin = async (e) => {
		e.preventDefault();

		const status = await verifyUser({ shopid: shopId, username, password });

		console.log(status);

		if (status.loggedIn === "success") {
			// allow login
			console.log("allowed");
			navigate("/admin/user");
		} else {
			// prevent login and display error message
			console.log("not allowed");
			
		}
	};

	return (
		<div className="admin-pic">
			{form === "login" ? (
				<form
					className="form-container"
					onSubmit={(e) => handleLogin(e)}
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
									Användarnamn = admin{" "}
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
									Lösenord = password{" "}
								</p>
							)}
							{passwordIsValid}
						</label>
					</div>
					<button type="submit" className="admin-button">
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
						<label htmlFor="">
							<p className="text">Användarnamn</p>
							<input
								className={
									registerUsername.trim().length === 0 ||
									registerUsername.length < 5
										? "invalid"
										: "valid"
								}
								type="text"
								value={registerUsername}
								onChange={(e) =>
									setRegisterUsername(e.target.value)
								}
							/>
							{registerUsername.trim().length === 0 ? (
								<div className="error-messages">
									Du måste fylla i ett användarnamn
								</div>
							) : registerUsername.length < 5 ? (
								<div className="error-messages">
									Minst 5 tecken
								</div>
							) : null}
						</label>
						<label htmlFor="">
							<p className="text">Lösenord</p>
							<input
								className={
									registerPassword.length < 5
										? "invalid"
										: registerPassword
										? "valid"
										: ""
								}
								type="password"
								value={registerPassword}
								onChange={(e) =>
									setRegisterPassword(e.target.value)
								}
							/>
							{registerPassword.length < 5 ? (
								<div className="error-messages">
									Minst 5 tecken
								</div>
							) : null}
						</label>
						<label htmlFor="">
							<p className="text">Upprepa lösenord</p>
							<input
								className={
									registerRepeatPassword.length < 5 ||
									registerRepeatPassword !== registerPassword
										? "invalid"
										: registerRepeatPassword ===
										  registerPassword
										? "valid"
										: ""
								}
								type="password"
								value={registerRepeatPassword}
								onChange={(e) =>
									setRegisterRepeatPassword(e.target.value)
								}
							/>
							{registerRepeatPassword.length < 5 ? (
								<div className="error-messages">
									Lösenord: Minst 5 tecken
								</div>
							) : registerRepeatPassword !== registerPassword ? (
								<div className="error-messages">
									Lösenordet matchar inte
								</div>
							) : null}
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
