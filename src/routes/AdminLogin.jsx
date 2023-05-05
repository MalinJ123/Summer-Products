import paradise from "../assets/paradise.jpg";
import { useState } from "react";
import { useLoaderData, useParams, Link, useNavigate } from "react-router-dom";
import "../stylesheet/AdminLogin.css";
// import '../stylesheet/Home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


const AdminLogin = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
 
	const [usernameIsValid, setUsernameIsValid] = useState(null);
	const [passwordIsValid, setPasswordIsValid] = useState(null);
 
	const formIsValid = usernameIsValid && passwordIsValid;
 
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
	  } else if (password !== "mums") {
		 setPasswordIsValid(false);
	  } else {
		 setPasswordIsValid(true);
	  }
	};
 
	const handleSubmit = (e) => {
	  e.preventDefault(); //förhindra sidan att laddas om vid submit
	  if (formIsValid) {
		 console.log("Admin logged in successfully");
	  } else {
		 console.log("Admin login failed");
	  }
	};
 
	return (
		<>
		  <img
			 className="admin-pic"
			 src={paradise}
			 alt="En härlig paradis bild"
		  />
		  <form className="form-container" onSubmit={handleSubmit}>
			 <div className="close-button">
				<Link className="" to="/">
				  <FontAwesomeIcon icon={faTimes} />
				</Link>
			 </div>
			 <h2 className="AdminLogin-title">Admin login</h2>
			 <div className="label-container">
				<label className="input-text" htmlFor="">
				  <p className="text">Username</p>
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
					<p className="error-message">Username = Admin </p>

				  )}
				</label>
				<label htmlFor="">
				  <p className="text">Password</p>
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
					 <p className="error-message">Password = mums </p>
				  )}
				  	{passwordIsValid }
				</label>
			 </div>
			 <button
				className="admin-button"
				type="submit"
				disabled={!formIsValid}
			 >
				Logga in
			 </button>
		  </form>
		</>
	 );
  };
  
  export default AdminLogin;