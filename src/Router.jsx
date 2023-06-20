import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Gallery from "./components/Gallery";
import Login from "./components/Login";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./firebase/config";

const RouterComp = () => {
  const [user, setUser] = useState();

  useEffect(() => {
	onAuthStateChanged(firebaseAuth, (userLoggedIn) => {
		if (userLoggedIn) {
			console.log(userLoggedIn);
			setUser(userLoggedIn);
		} else {
			console.log('No user is loged in');
		}
	})
  }, [setUser]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Gallery />} />
		<Route path="/admin" element={<Login setUser={setUser} />} />
		<Route path="/admin-panel" element={<h1>Panou Admin</h1>} />
      </Routes>
    </>
  )
}

export default RouterComp;