import { createHashRouter } from "react-router-dom";
import Root from './routes/Root.jsx'
import Home from './routes/Home.jsx'
import Products, {loader as ProductsLoader}from './routes/Products.jsx'
import ProductDetails from './routes/ProductDetails.jsx'

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
				element: <Products/>,
				loader: ProductsLoader ,
		
			},
			{
				path: 'details/:id',
				element: <ProductDetails/>,
				loader: ProductsLoader
			}
			
		],
	
		//används om url inte finns
			errorElement: <ErrorPage/>
	}
])

export { router }