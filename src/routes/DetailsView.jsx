import { useLoaderData, useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";

// TODO: uppdatera routeConfig.jsx

const DetailsView = () => {
	const { id } = useParams()
	const allProducts = useLoaderData()
// console.log('vad är data?' , data)
	const product =  allProducts.find((p) => p.id == id);
	// TODO: skapa en onAddToCart-funktion
	return (
		<div>
			<ProductDetails product={product} onAddToCart={null} />
		</div>
	);
};

export default DetailsView;

//recoil atom någonting från (flytta ut cartItems från shoppingCart till Recoilatom. )