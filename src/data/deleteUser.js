
async function deleteUser(userId) {
	console.log("adding product...");
	userId.shopid = shopId
	const options = {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(userId)
	}
	const response = await fetch(url + '?action=add-user', options)
	const statusUser = await response.json()
	console.log('Response from API: ', statusUser)
}


export default deleteUser;