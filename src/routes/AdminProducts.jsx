import AdminUser from "./AdminUser";

function AdminProduct({ products }) {
	if (!products) {
	  return <div>VAAARFÖÖÖR FINNS det inte en produkt här ???</div>;
	}
 
	return (
	  <div>
		 {products.map((product) => (
			<div key={product.id}>
			  <h3>{product.title}</h3>
			  <p>{product.description}</p>
			  <p>{product.price} kr</p>
			</div>
		 ))}
	  </div>
	);
 }
 
export default AdminProduct; 