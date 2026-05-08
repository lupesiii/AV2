import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute() {
	const idUser = localStorage.getItem("usuarioAtual");

	return idUser ? <Outlet /> : <Navigate to="/login" replace />;
}
