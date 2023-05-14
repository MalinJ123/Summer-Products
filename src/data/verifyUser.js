import { url } from "./constants";

async function verifyUser(oneUser) {
	console.log("verifying user...");
	const options = {
	  method: "POST",
	  headers: { "Content-Type": "application/json" },
	  body: JSON.stringify(oneUser),
	};
	const response = await fetch(url + "?action=login-user ", options);
	const statusUser = await response.json();
	console.log("Response from API: ", statusUser);
	return { loggedIn: statusUser.status };
 }
 
 export default verifyUser;