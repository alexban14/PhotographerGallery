import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Gallery from "./components/Gallery";
import Login from "./components/Login";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./firebase/config";
import NavBar from "./components/NavBar";
import ProtectRoute from "./utils/ProtectRoute";
import AdminPanel from "./components/AdminPanel";

const CustomRouter = () => {
  const [user, setUser] = useState();

  useEffect(() => {
	onAuthStateChanged(firebaseAuth, (userLoggedIn) => {
		if (userLoggedIn) {
			setUser(userLoggedIn);
		} else {
			console.log('No user is loged in');
		}
	})
  }, [setUser]);

  return (
    <>
		<NavBar
			user={user}
			setUser={setUser}
		/>
		<Routes>
			<Route path="/" element={
				<Gallery user={user} />
			} />
			<Route path="/admin" element={
				<Login setUser={setUser} />
			} />
			<Route path="/admin-panel" element={
				<ProtectRoute user={user} >
					<AdminPanel />
				</ProtectRoute>
			} />
		</Routes>
    </>
  )
}

export default CustomRouter;