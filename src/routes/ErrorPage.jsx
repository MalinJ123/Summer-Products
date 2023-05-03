
import { Link } from "react-router-dom"


const ErrorPage = () => {

	return (
		<section className="ErrorPage-container">
			<h2>No Product</h2>
			<p>Please check the URL again</p>
				<p><Link to="/"> Tillbaka</Link>
				</p>
		</section>
	);
}

export default ErrorPage;