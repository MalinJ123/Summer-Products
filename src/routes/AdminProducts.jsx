import { useLoaderData } from "react-router-dom";
import AdminUser from "./AdminUser";

function AdminProduct() {
	let products = useLoaderData()

	if (!products) {
	  return <div>VAAARFÖÖÖR FINNS det inte en produkt här ???</div>;
	}
 
	return (
		<div className="grid-container">
		 {products.map((product) => (
			<div className="product" key={product.id}>
			  <h3 className="title">{product.title}</h3>
			  <img className="products-pic" src={product.picture} alt="product image" />
			  <p>{product.description}</p>
			  <p className="product-price">{product.price} kr</p>
			</div>
		 ))}
	  </div>
	);
 }
 
export default AdminProduct; 