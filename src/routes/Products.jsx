import React from "react";
import { useActionData } from "react-router-dom";
import { useLoaderData, Link } from "react-router-dom";
import "../stylesheet/Products.css";
import Suunto from "../assets/Suunto.jpg";
import Footer from "../components/Footer";


const testData = [
	{
		id: 1,
		titel: "Suunto D5",
		image: Suunto,
		description:
			"En avancerad dykdator med färgskärm, inbyggd kompass och trådlös anslutning till dykdator och smartphone för att övervaka och logga dina dyk.",
		price: 4500,
	},
	{
		id: 2,
		titel: "Scubapro Nova 850R",
		image: Suunto,
		description:
			"En kraftfull dyklampa med 850 lumen ljusstyrka, flera ljuslägen och en brinntid på upp till 12 timmar. Perfekt för att utforska mörka undervattensmiljöer.",
		price: 2300,
	},
	{
		id: 3,
		titel: "Mares Force Nano ",
		image: Suunto,
		description:
			"En kompakt dykkniv med ett rostfritt stålblad och ett ergonomiskt handtag för enkel hantering under vatten. Levereras med en nylonfodral för säker förvaring.",
		price: 900,
	},
	{
		id: 4,
		titel: "Cressi Gara Modular",
		image: Suunto,
		description:
			"En högpresterande dykfena med löstagbara blad för enkel anpassning och transport. Tillverkad i ett lättviktsmaterial för effektivt och bekvämt dykande.",
		price: 1800,
	},
	{
		id: 5,
		titel: "Aqua Lung Reveal",
		image: Suunto,
		description:
			"En kvalitetsdykmask med vid synvinkel och en ergonomisk passform för optimal komfort. Utrustad med tempererat glas och enkel justering för att passa olika ansiktsformer.",
		price: 700,
	},
];

export const loader = () => testData;

const Products = () => {
	const productData = useLoaderData();
	return (
		<section className="products-body">
			<h2 className="productTitle">Products</h2>
			<div className="grid-container">
				{productData.map(({ id, titel, image, description, price }) => (
					<div className="product" key={id}>
						<h3 className="products-title">
							<Link to={`/details/${id}`}>{titel}</Link>
						</h3>
						<img
							className="products-pic"
							src={image}
							alt="bild på produkt"
						/>
						{/* <p className="empty">{description}</p> */}
						<div className="product-price">
							<p>Pris: {price}kr</p>
						</div>
					</div>
				))}
			</div>
		
		</section>
	);
};

export default Products;
