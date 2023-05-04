import { Outlet, NavLink } from "react-router-dom"

const Root = () => {
	
	return (
		<>
	
		<header className="header-body" >
			<NavLink className="header link" to="/">Home</NavLink>
			<NavLink className="products link"  to="products"> Products</NavLink>
			<NavLink className="error link"  to="error"> Error</NavLink>
			<NavLink className="details link"  to="/details/1">Detaljer</NavLink>
			<NavLink className="details link"  to="/cart">ShoppingCart</NavLink>

		</header>
		<main>
			<Outlet/>
		</main>	
		</>
	)
}

export default Root;