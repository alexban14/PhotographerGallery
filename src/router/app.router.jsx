import { createBrowserRouter } from "react-router-dom"
import App from '../App.jsx';


const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: '/admin',
		element: <h1>Admin login page</h1>
	}
]);

export { router };