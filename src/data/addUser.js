async function addUser(oneUser) {
	console.log("adding user...");
	oneUser.shopid = shopId
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