import { Navigate } from "react-router-dom"

const ProtectRoute = ({ user, children }) => {
	if (!user) {
		return <Navigate to='/admin' replace />
	}

	return children;
}

export default ProtectRoute;