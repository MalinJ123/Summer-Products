import { createHashRouter } from "react-router-dom";
import Root from './routes/Root.jsx'
import Home from './routes/Home.jsx'


const router = createHashRouter([
	{
		path: '/',
		element: <Root/>,
		children: [
			{
				path: '',
				element: <Home/>
			},
		]

	}
])

export { router }