import { Outlet, NavLink } from "react-router-dom"

const Root = () => {
	
	return (
		<>
	
		<header>
			<NavLink to="/">Home</NavLink>
			<NavLink to="products"> Products</NavLink>
			<NavLink to="error"> Error</NavLink>
			<NavLink to="/details/1">Detaljer</NavLink>
		</header>
		<main>
			<Outlet/>
		</main>
	
		</>
	)
}

export default Root;