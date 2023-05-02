import { createHashRouter } from "react-router-dom";
import Root from './routes/Root.jsx'
import Home from './routes/Home.jsx'
import Products from "./routes/Products.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";


const router = createHashRouter([
	{
		path: '/',
		element: <Root/>,
		children: [
			{
				path: '',
				element: <Home/>
			},
			{	//path måste heta samma som navlink i roots
				path: 'products',
				element: <Products/>
			},
		],
		
		//används om url inte finns
			errorElement: <ErrorPage/>
	}
])

export { router }