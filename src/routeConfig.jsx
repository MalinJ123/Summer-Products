import { createHashRouter } from "react-router-dom";
import Root from './routes/Root.jsx'
import Home from './routes/Home.jsx'
import Products, {loader as ProductsLoader}from './routes/Products.jsx'
import ProductDetails from './routes/ProductDetails.jsx'
import ErrorPage from "./routes/ErrorPage.jsx";
import ShoppingCart from "./routes/ShoppingCart.jsx";

import AdminLogin from "./routes/AdminLogin.jsx";
import AdminUser from "./routes/AdminUser.jsx";


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
			},
			{
				path: 'cart',
				element: <ShoppingCart/>,
				loader: ProductsLoader,
			},
			{
				path: 'admin',
				element: <AdminLogin/>,
				loader: ProductsLoader,
				// 'children: [{

				// 	path : 'admin-user',
				// 	element: <AdminUser/>,
				// 	}
				// ]'
			},
			{
				path : 'admin-user',
				element: <AdminUser/>,
			}
			
		],
	
		//används om url inte finns
			errorElement: <ErrorPage/>
	}
])

export { router }