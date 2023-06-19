import { createBrowserRouter } from "react-router-dom"
import App from '../App.jsx';
import Login from "../components/Login.jsx";

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: '/admin',
		element: <Login />
	}
]);

export { router };