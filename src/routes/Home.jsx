import paradise from '../assets/paradise.jpg'
import '../stylesheet/Home.css'

const Home = () => {
	
	return (
		<div className="content">
			<img className='home-pic' src={paradise} alt="En härlig paradis bild" />
		<h2> Home </h2>
		<p>Welcome SUMMER</p>
	</div>
	)
}

export default Home