import { url, shopId } from './constants.js'

// [GET] ?action=get-users&shopid=id - list all your current users. Response body: [{ id, username }]
async function getUsers() {
	console.log('getting users...')
	const response = await fetch(url + '?action=get-users&shopid=' + shopId)
	const data = await response.json()
	console.log('response from API: ', data)

	return data
}
export default getUsers