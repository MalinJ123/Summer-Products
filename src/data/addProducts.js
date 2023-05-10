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
		picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT5KywOsrGMkLRTxwwjEt0ltWZDVG1hs_Kb8Kef5YAJEpkdhwSCXXNNI3rWC-VH8kckSg&usqp=CAU',
		price: 2000,
		shopid: shopId
	},
	{
		action: 'add-product',
		name: 'Dator för dykning',
		description: 'En pålitlig dykdator med avancerade funktioner för säker och effektiv dykning.',
		picture: 'https://img.fruugo.com/product/3/39/156174393_max.jpg',
		price: 5000,
		shopid: shopId
	}, {
		action: 'add-product',
		name: 'Dykmask',
		description: 'Bekväm och hållbar dykmask med utmärkt sikt under vattnet.',
		picture: 'https://cdn.shopify.com/s/files/1/1193/9448/products/Ocean-Reef-Neptune-Space-G-divers-Full-Face-Mask-w-Big-3.jpg?v=1498161601',
		price: 1000,
		shopid: shopId
	}, {
		action: 'add-product',
		name: 'Våtdräkt',
		description: 'Flexibel och varm våtdräkt för dykning i kalla vattenförhållanden.',
		picture: 'https://www.neopren.es/blog/wp-content/uploads/2014/05/neopreno-aguas-abiertas-sailfish-edge.jpg',
		price: 3000,
		shopid: shopId
	}, {
		action: 'add-product',
		name: 'Regulator för dykning',
		description: 'Högpresterande dykregulator för optimal luftförsörjning under dyk.',
		picture: 'https://img.joomcdn.net/dd225d4ba00a8c774aabfb714b793ee75bb98b4d_original.jpeg',
		price: 4000,
		shopid: shopId
	}, {
		action: 'add-product',
		name: 'Dyklampa',
		description: 'Kraftfull och hållbar dyklampa för förbättrad sikt i mörka undervattensmiljöer.',
		picture: 'https://ydyk.se/ydyk/butiken/lampor/8.jpeg',
		price: 1500,
		shopid: shopId
	}, {
		action: 'add-product',
		name: 'Dykkniv',
		description: 'Stabil och tillförlitlig dykkniv för att skära igenom rep, nät och andra hinder.',
		picture: 'https://m.media-amazon.com/images/I/51f39ENlyCL._AC_UF1000,1000_QL80_.jpg',
		price: 800,
		shopid: shopId
	}, {
		action: 'add-product',
		name: 'Kompass för dykning',
		description: 'Precis och tillförlitlig dykkompass för navigering under undervattensutforskning.',
		picture: 'https://m.media-amazon.com/images/I/61xoRDBqbmL._AC_UF350,350_QL80_.jpg',
		price: 1200,
		shopid: shopId
	},
	{
		action: 'add-product',
		name: 'Dykväska',
		description: 'Rymlig och hållbar dykväska för att bära all din dykutrustning på en plats.',
		picture: 'https://contents.mediadecathlon.com/p2203647/k$831e4acdbb3bd093fee684a9c5684375/dykvaska-scd-100-l-svartslashgra.jpg?&f=452x452',
		price: 2000,
		shopid: shopId
	},

]
async function addProduct(oneProduct) {
	console.log("adding product...");
	oneProduct.shopid = shopId
	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(oneProduct)
	}
	const response = await fetch(url + '?action=add-product', options)
	const statusObject = await response.json()
	console.log('Response from API: ', statusObject)
}
async function addAllTheProducts() {
	// let products = data.map(x => ({.)




	data.forEach(product => {
		addProduct(product)
	})
}

export default addProduct;

//Npm run delete: tar bort alla produkter.
//Npm run add : Lägg till alla produkter 
//Npm run get: Hämta alla produkter -> lägg i Products.jsx

// Kommentera bort när ej används
// addAllTheProducts();
