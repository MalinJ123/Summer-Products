async function addUser(oneUser) {
	// [POST] ?action=add-user - add a new user. Request body: { shopid, username, password }
	console.log("adding user...", oneUser);
	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(oneUser)
	}
	const response = await fetch(url + '?action=add-user', options)
	const statusUser = await response.json()
	console.log('Response from API: ', statusUser)
}


export default addUser;