import { Outlet, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Root = () => {
	return (
		<>
			<header className="header-body">
				<NavLink className="header link" to="/">
					Home
				</NavLink>
				<NavLink className="products link" to="/products">
					Products
				</NavLink>
				{/* <NavLink className="error link" to="/error">
					Error
				</NavLink> */}
				{/* <NavLink className="details link" to="/details/1">
					Detaljer
				</NavLink> */}
				<NavLink className="icon link" to="/admin">
					<FontAwesomeIcon icon={faRightToBracket} />
				</NavLink>
				{/* <NavLink className="icon link" to="/admin/user">
					AdminUser
				</NavLink> */}

				<NavLink className="icon link" to="/cart">
					<FontAwesomeIcon icon={faShoppingCart} />
				</NavLink>
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default Root;
