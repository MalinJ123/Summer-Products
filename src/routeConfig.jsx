import { createHashRouter } from "react-router-dom";
import Root from './routes/Root.jsx'
import Home from './routes/Home.jsx'
import Products, {loader as ProductsLoader}from './routes/Products.jsx'
import DetailsView from './routes/DetailsView.jsx'
import ErrorPage from "./routes/ErrorPage.jsx";
import ShoppingCart from "./routes/ShoppingCart.jsx";
import AdminProducts from "./routes/AdminProducts.jsx";
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
				element: <Products />,
				loader: ProductsLoader ,
		
			},
			{
				path: 'products/:id',
				element: <DetailsView/>,
				loader: ProductsLoader
			},
			{
				path: 'cart',
				element: <ShoppingCart/>,
				// loader: ProductsLoader, // varje gång du använder den här så går sidan skiiit långsamt 
			},
			{
				path: 'admin',
				element: <AdminLogin/>,
			
			},
			{
				path : 'admin/user',
				element: <AdminUser/>,
			},
			{
				path : 'admin/products',
				element: <AdminProducts/>,
				loader: ProductsLoader,

			}
			
		],
	
		//används om url inte finns
			errorElement: <ErrorPage/>
	}
])

export { router }