import paradise from "../assets/paradise.jpg";
import "../stylesheet/Home.css";
import Footer from "./footer";

const Home = () => {
	return (
		<>
			<img
				className="home-pic"
				src={paradise}
				alt="En härlig paradis bild"
			/>
			<div className="content">
				<h2 className="title"> Home </h2>
				<p className="description">
					survived not only five centuries, but also the leap into
					electronic typesetting, remaining essentially unchanged. It
					was popularised in the 1960s with the release of Letraset
					sheets containing Lorem Ipsum passages, and more recently
					with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsu
				</p>
			</div>
			<Footer/>
		</>
	);
};

export default Home;
