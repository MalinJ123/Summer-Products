// import Suunto from "../assets/Suunto.jpg";
import { url, shopId } from '../data/constants.js'

const data = [
	{
		action: 'add-product',
		name: 'Vatten pistol',
		description: 'Skjuter starka strålar med vatten på dina fiender.',
		picture: 'https://plus.unsplash.com/premium_photo-1661389514063-92c3a578c288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
		price: 15,
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
	{
		action: 'add-product',
		name: 'Vatten Bazooka',
		description: 'Påminner om vatten pistolen med liknande funktioner. Fast bazookan ger större respekt på stranden',
		picture: 'https://static.partyking.org/fit-in/1300x0/products/original/water-bazooka-vattengevar-4.jpg',
		price: 89,
		shopid: shopId,
	},
	{
		action: 'add-product',
		name: 'Full anisktsmask',
		description: 'En full ansikts snorkelmask som ger dykare möjlighet att andas naturligt genom näsa och mun utan att behöva ha en snorkel i munnen hela tiden.',
		picture: 'https://linneashopen.com/images/zoom/ug15-750x500_c.jpg',
		price: 1500,
		shopid: shopId,
	},
	{
		action: 'add-product',
		name: 'Torrdräkt',
		description: 'En torrdräkt används för att skydda dykare från kallt vatten och för att öka flytförmågan i vattnet. Det finns olika typer av torrdräkter beroende på vattentemperaturen.',
		picture: 'https://cdn.abicart.com/shop/ws5/42105/art5/h2974/112012974-origpic-225570.png',
		price: 2000,
		shopid: shopId,
	},
	{
		action: 'add-product',
		name: 'Dykmössa',
		description: 'En dykmössa används för att skydda dykare från snitt och skador under en dykning. Det finns olika typer av dykmössor beroende på dykarens behov',
		picture: 'https://m.media-amazon.com/images/I/61SIPol8-1L._AC_UF1000,1000_QL80_.jpg',
		price: 300,
		shopid: shopId,
	},
	{
		action: 'add-product',
		name: 'Dykflska',
		description: 'En dykflaska innehåller tryckluft som används av dykare för att andas under vattnet. Dykflaskor kommer i olika storlekar och kapaciteter beroende på dykarens behov',
		picture: 'https://www.dykarna.nu/lexicon/img/1128.jpg',
		price: 600,
		shopid: shopId,
	},
	{
		action: 'add-product',
		name: 'Bad handduk',
		description: 'Stor handduk med dykar tryck',
		picture: 'https://www.tradeinn.com/f/13618/136188655/uwahu-dive-vader-towel.jpg',
		price: 20,
		shopid: shopId,
	},
	{
		action: 'add-product',
		name: 'Flytväst',
		description: ' En självuppblåsande flytväst är en viktig del av dykutrustningen för att hålla dig säker under dykningen. Denna flytväst har en inbyggd gaspatron som aktiveras när den kommer i kontakt med vatten',
		picture: 'https://img.fruugo.com/product/9/39/164578399_max.jpg',
		price: 2000,
		shopid: shopId,
	},
	{
		action: 'add-product',
		name: 'Dykkikare',
		description: 'En Dykkikare har en inbyggd kamera som låter dig ta bilder och videor av det du ser under vattnet. Den är lätt att använda och ger dig en fantastisk upplevelse under dina dyk.',
		picture: 'https://seapax.se/wp-content/uploads/2023/02/Magnipro-7x50-Marine-Compass-Orange-detalj.jpg',
		price: 5000,
		shopid: shopId,
	},
	{
		action: 'add-product',
		name: 'Dykflagga',
		description: ' En dykflagga är en viktig säkerhetsutrustning för dykare. Flaggan signalerar till andra båtförare och användare av vattenområdet att det finns dykare i vattnet och att de bör vara försiktiga.',
		picture:'https://thumbs.dreamstime.com/b/dykflagga-3326338.jpg',
		price: 250,
		shopid: shopId,
	},
	{
		action: 'add-product',
		name: 'Dykhandskar',
		description: ' Ett par slitstarka handskar som är speciellt designade för dykning. De ger bra grepp och skydd mot skador och skärskador när man hanterar utrustning och simmar genom undervattensmiljön',
		picture: 'https://shop11921.sfstatic.io/upload_dir/shop/_thumbs/EVERFLEX-GLOVE-3.0MM-58.129.X.w610.h610.fill.jpg',
		price: 500,
		shopid: shopId,
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
