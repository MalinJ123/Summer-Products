import depp from "../assets/depp.jpg";

import { Link } from "react-router-dom"


const ErrorPage = () => {

	return (

		<>
		<section className="ErrorPage-container">
			<img src={depp}  alt="bild som beskriver känslan att inte komma åt hemsidan" />
			<h2>This side does not exist</h2>
			<p>Please check the URL again</p>
			<button className="detail-button">
				<Link to="/"> Tillbaka</Link>
					</button>
		</section>
		</>
	);
}

export default ErrorPage;

