import paradise from "../assets/paradise.jpg";
import "../stylesheet/Home.css";
import Footer from "../components/Footer.jsx";

const Home = () => {
	return (
		<div className="home-container">
			<div className="content">
				<h2 className="title"> Home </h2>
				<p className="description">
					Dykning är en fantastisk sport som ger oss möjlighet att
					utforska den underbara världen under vattenytan. Oavsett om
					du är en erfaren dykare eller just har upptäckt denna
					spännande hobby, så finns det inget som kan jämföra med att
					ha din egen utrustning. Att äga din egen dykutrustning ger
					dig frihet, självständighet och en känsla av säkerhet när du
					beger dig ut på dina äventyr.
				</p>
				<p className="description card">
					Att köpa dyksaker kan verka som en stor investering i
					början, men det är verkligen värt det. När du har din egen
					utrustning kan du anpassa den efter dina specifika behov och
					preferenser. Du kan välja en mask som passar perfekt på ditt
					ansikte, en regulator som ger dig en bekväm
					andningsupplevelse och en våtdräkt som ger dig rätt skydd
					och rörelsefrihet.
				</p>
			</div>

			<Footer />
		</div>
	);
};

export default Home;
