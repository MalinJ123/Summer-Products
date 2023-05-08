// import Suunto from "../assets/Suunto.jpg";
import { url, shopId } from '../data/constants.js'

const data = [
	{
		action: 'add-product',
		name: 'Water pistol',
		description: 'Fires cooling streams of water at unsuspecting foes.',
		picture: 'https://plus.unsplash.com/premium_photo-1661389514063-92c3a578c288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
		price: 1200,
		shopid: shopId,
	},
	{
		action: 'add-product',
		name: 'Dykfenor',
		description: 'Högkvalitativa dykfenor för förbättrad framdrivning och manövrerbarhet.',
		picture: 'https://plus.unsplash.com/premium_photo-1661389514063-92c3a578c288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
		price: 2000,
		shopid: shopId
	},
	{
		action: 'add-product',
		name: 'Dator för dykning',
		description: 'En pålitlig dykdator med avancerade funktioner för säker och effektiv dykning.',
		picture: 'https://plus.unsplash.com/premium_photo-1661389514063-92c3a578c288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
		price: 5000,
		shopid: shopId
	}, {
		action: 'add-product',
		name: 'Dykmask',
		description: 'Bekväm och hållbar dykmask med utmärkt sikt under vattnet.',
		picture: 'https://plus.unsplash.com/premium_photo-1661389514063-92c3a578c288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
		price: 1000,
		shopid: shopId
	}, {
		action: 'add-product',
		name: 'Våtdräkt',
		description: 'Flexibel och varm våtdräkt för dykning i kalla vattenförhållanden.',
		picture: 'https://plus.unsplash.com/premium_photo-1661389514063-92c3a578c288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
		price: 3000,
		shopid: shopId
	}, {
		action: 'add-product',
		name: 'Regulator för dykning',
		description: 'Högpresterande dykregulator för optimal luftförsörjning under dyk.',
		picture: 'https://plus.unsplash.com/premium_photo-1661389514063-92c3a578c288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
		price: 4000,
		shopid: shopId
	}, {
		action: 'add-product',
		name: 'Dyklampa',
		description: 'Kraftfull och hållbar dyklampa för förbättrad sikt i mörka undervattensmiljöer.',
		picture: 'https://plus.unsplash.com/premium_photo-1661389514063-92c3a578c288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
		price: 1500,
		shopid: shopId
	}, {
		action: 'add-product',
		name: 'Dykkniv',
		description: 'Stabil och tillförlitlig dykkniv för att skära igenom rep, nät och andra hinder.',
		picture: 'https://plus.unsplash.com/premium_photo-1661389514063-92c3a578c288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
		price: 800,
		shopid: shopId
	}, {
		action: 'add-product',
		name: 'Kompass för dykning',
		description: 'Precis och tillförlitlig dykkompass för navigering under undervattensutforskning.',
		picture: 'https://plus.unsplash.com/premium_photo-1661389514063-92c3a578c288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
		price: 1200,
		shopid: shopId
	},
	{
		action: 'add-product',
		name: 'Dykväska',
		description: 'Rymlig och hållbar dykväska för att bära all din dykutrustning på en plats.',
		picture: 'https://plus.unsplash.com/premium_photo-1661389514063-92c3a578c288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
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
	// let products = data.map(x => ({.)




	data.forEach(product => {
		addProduct(product)
	})
}


//Npm run delete: tar bort alla produkter.
//Npm run add : Lägg till alla produkter 
//Npm run get: Hämta alla produkter -> lägg i Products.jsx

//Kommentera bort när ej används
// addAllTheProducts();
