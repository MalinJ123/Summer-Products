// import Suunto from "../assets/Suunto.jpg";
import {url, shopId} from '../data/constants.js'

const data = [
	{
		action: 'add-product',
		name: 'Water pistol',
		description: 'Fires cooling streams of water at unsuspecting foes.',
		picture: 'insert web URL here',
		price: 1200,
		shopid: shopId
	},
	{
		action: 'add-product',
		name: 'Dykfenor',
		description: 'Högkvalitativa dykfenor för förbättrad framdrivning och manövrerbarhet.',
		picture: 'sätt in webbadress här',
		price: 2000,
		shopid: shopId
	},
	{
		action: 'add-product',
		name: 'Dator för dykning',
		description: 'En pålitlig dykdator med avancerade funktioner för säker och effektiv dykning.',
		picture: 'sätt in webbadress här',
		price: 5000,
		shopid: shopId
	}, {
		action: 'add-product',
		name: 'Dykmask',
		description: 'Bekväm och hållbar dykmask med utmärkt sikt under vattnet.',
		picture: 'sätt in webbadress här',
		price: 1000,
		shopid: shopId
	}, {
		action: 'add-product',
		name: 'Våtdräkt',
		description: 'Flexibel och varm våtdräkt för dykning i kalla vattenförhållanden.',
		picture: 'sätt in webbadress här',
		price: 3000,
		shopid: shopId
	}, {
		action: 'add-product',
		name: 'Regulator för dykning',
		description: 'Högpresterande dykregulator för optimal luftförsörjning under dyk.',
		picture: 'sätt in webbadress här',
		price: 4000,
		shopid: shopId
	}, {
		action: 'add-product',
		name: 'Dyklampa',
		description: 'Kraftfull och hållbar dyklampa för förbättrad sikt i mörka undervattensmiljöer.',
		picture: 'sätt in webbadress här',
		price: 1500,
		shopid: shopId
	}, {
		action: 'add-product',
		name: 'Dykkniv',
		description: 'Stabil och tillförlitlig dykkniv för att skära igenom rep, nät och andra hinder.',
		picture: 'sätt in webbadress här',
		price: 800,
		shopid: shopId
	}, {
		action: 'add-product',
		name: 'Kompass för dykning',
		description: 'Precis och tillförlitlig dykkompass för navigering under undervattensutforskning.',
		picture: 'sätt in webbadress här',
		price: 1200,
		shopid: shopId
	},
	{
		action: 'add-product',
		name: 'Dykväska',
		description: 'Rymlig och hållbar dykväska för att bära all din dykutrustning på en plats.',
		picture: 'sätt in webbadress här',
		price: 2000,
		shopid: shopId
	},

]
async function addProduct(oneProduct) {
	console.log("adding product...");

	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(oneProduct)
	}
	const response = await fetch(url, options)
	const statusObject = await response.json()
	console.log('Response from API: ', statusObject)
}
async function addAllTheProducts() {
	let products = data.map(x => ({...x, name: 'name' }))

	// let products = data.map(product => ({...product,name: 'name'}));
	
	console.log(products)

	products.forEach(product => {
		addProduct(product)
	})
}


addAllTheProducts();
