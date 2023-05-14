import paradise from "../assets/paradise.jpg";
import "../stylesheet/Home.css";
import Footer from "../components/Footer.jsx";

const Home = () => {
	return (
		<div className="home-container">
			<div className="content">
				<h2 className="title"> VÄLKOMEN TILL OCEAN </h2>
				<div className="home">
	<p className="description">
					Din partner för säker och lyckad
					dykning! Vi är stolta över att erbjuda de bästa produkterna
					för dykare på alla nivåer.
				</p>
				</div>
				<div className="home">

				<p className="description card">
					Att köpa dyksaker kan verka som en stor investering i
					början, men det är verkligen värt det. När du har din egen
					utrustning kan du anpassa den efter dina specifika behov och
					preferenser.
				</p>
				</div>

			
			</div>

			<Footer />
		</div>
	);
};

export default Home;
