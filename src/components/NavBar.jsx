import { useState } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../firebase/config";

const NavBar = ({ user, setUser }) => {
	const [isOpen, setIsOpen] = useState();

	const handleSignOut = () => {
		signOut(firebaseAuth)
			.then(() => {
				setUser(null);
			})
			.catch( (error) => {
				console.log(error);
			})
		;
	}

	return (
		<nav className="max-w-[960px] mx-auto">
			<div className="flex items-center justify-between flex-wrap p-6">
				<div className="flex items-center flex-shrink-0 mr-6 lg:mr-72">
					<h1 className="text-blue-700 border-opacity-[var(--tw-border-opacity)] text-base font-normal tracking-wider">
						<Link to="/">Photographer Joe</Link>
					</h1>
				</div>
				<div className="block lg:hidden">
					<button
					onClick={() => setIsOpen(!isOpen)}
					className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
					>
						<svg
							className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
						</svg>
						<svg
							className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
						</svg>
					</button>
				</div>
				<div
					className={`w-full block flex-grow lg:flex lg:items-end justify-end lg:w-auto ${isOpen ? "block" : "hidden"}`}
					>
						{/* <div className="text-sm lg:flex-grow">
							<a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
							First Link
							</a>
							<a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
								Second Link
							</a>
							<a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
								Third Link
							</a>
							<a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
								Fourth Link
							</a>
						</div> */}
					{ user && <div>
						<button className="inline-flex items-center bg-blue-700 border-0 py-1 px-2 mx-2 text-white rounded">
							<Link to='/admin-panel'>Panou Admin</Link>
						</button>
						<button onClick={handleSignOut} className="inline-flex items-center bg-red-500 border-0 py-1 px-2 mx-2 text-white rounded">
							Ieși din cont
						</button>
					</div> }
				</div>
			</div>
		</nav>
	)	
}

export default NavBar;