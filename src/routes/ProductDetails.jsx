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

	function handleAddToCart() {
		props.onAddToCart(product.name, product.picture, product.price);
	 }
	 
	 

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
		<>
			<p className="button-container">
				<button className="detail-button">
					<Link className="link-btn" to="/products">
						Tillbaka
					</Link>
				</button>
			</p>
			<section className="product-container">
				<div className="wrapper">
					<h2 className="detail-title">{product.name}</h2>
					<img
						className="detail-pic"
						src={product.picture}
						alt="bild på produkt"
					/>
					<div className="p-price-container">
						<p className="detail-description">
							{product.description}
						</p>
						<p className="detail-price">{product.price} Kr</p>
					</div>
					<button className="detail-button" onClick={handleAddToCart}>Lägg till</button>
				</div>
			</section>
		</>
	);
};

export default ProductDetails;
