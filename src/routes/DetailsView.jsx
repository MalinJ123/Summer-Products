import { useLoaderData, useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";


const DetailsView = () => {
	const { id } = useParams()
	const allProducts = useLoaderData()
	const product =  allProducts.find((p) => p.id == id);
	return (
		<div>
			<ProductDetails product={product} onAddToCart={null} />
		</div>
	);
};

export default DetailsView;

