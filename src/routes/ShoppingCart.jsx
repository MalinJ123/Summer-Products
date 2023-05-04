// import { useState, useLoaderData } from "react-router-dom";

const ShoppingCart = () => {
	const [cartItems, setCartItems] = useState([]);
	const allProducts = useLoaderData();
 
	function handleAddToCart(name, image, price) {
	  const newCartItem = { name, image, price };
	  setCartItems([...cartItems, newCartItem]);
	}
 
	return (
	  <>
		 <div>
			<h2>Shopping cart</h2>
			<ul>
			  {cartItems.map((item, index) => (
				 <li key={index}>
					<img src={item.image} alt={item.name} />
					<p>{item.name}</p>
					<p>{item.price}</p>
				 </li>
			  ))}
			</ul>
			<ProductDetails
			  product={allProducts.find((p) => p.id == id)}
			  onAddToCart={handleAddToCart}
			/>
		 </div>
	  </>
	);
 };
export default ShoppingCart;
