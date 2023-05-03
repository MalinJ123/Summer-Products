import { useLoaderData, useParams, Link, useNavigate } from "react-router-dom";

const ProductDetails = () => {
	//id kommer från URL: /:id
	//vi återanvänder Loader-Functionen från Products.jsx
	//leta efter produkten med id i listan med alla produkter

	const navigate = useNavigate();
	const { id } = useParams();
	const allProducts = useLoaderData();
	const product = allProducts.find((p) => p.id == id);

	// console.log('ProductDetails: product = ', product, id)

	// if(!product){
	// 	navigate('/error')
	// 	return null
	// }

	if (!product) {
		return (
			<section>
				<h2>No Product</h2>
				<p>Please check the URL again</p>
				<p>
					<Link to="/products"> Tillbaka</Link>
				</p>
			</section>
		);
	}

	return (
		<section className="product-container">
			<h2>{product.title}</h2>
			<img 
				className="products-pic" 
				src={product.image} 
				alt="bild på produkt" 
			/>
			<p>{product.description}</p>
			<p>{product.price} Kr</p>
			<p>
				<Link to="/products"> Tillbaka</Link>
			</p>
		</section>
	);
};

export default ProductDetails;
