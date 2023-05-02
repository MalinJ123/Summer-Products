import { Outlet, NavLink } from "react-router-dom"

const Root = () => {
	
	return (
		<>
	
		<header>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/product"> Products</NavLink>
			<NavLink to="/error"> This dose not Exist</NavLink>
		</header>
		<main>
			{/* <Outlet/> */}
		</main>
		root!
		</>
	)
}

export default Root;