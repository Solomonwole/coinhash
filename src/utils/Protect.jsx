import { Navigate, Outlet, useLocation } from "react-router-dom";

export const RequireLoggedIn = () => {
	const user = localStorage.getItem('HashuserName');
	const location = useLocation();

	return user !== null ? (
		<Outlet />
	) : (
		<Navigate to="/login" state={{ from: location }} replace={true} />
	);
};