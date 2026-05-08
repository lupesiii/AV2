import { useNavigate } from "react-router";
import { useUsuario } from "@/hooks/useUsuario";

export default function UserOptions() {
	const navigate = useNavigate();
	const { setUsuario } = useUsuario();

	function logout() {
		localStorage.removeItem("usuarioAtual");
		setUsuario(null);
		navigate("/login");
	}

	return (
		<div className="absolute right-3 border border-azul bg-white flex flex-col">
			<button
				type="button"
				className="px-2 py-4 hover:bg-azul hover:text-white"
				onClick={() => navigate("/update")}
			>
				Update Usuario
			</button>
			<button
				type="button"
				className="px-2 py-4 hover:bg-azul hover:text-white"
				onClick={logout}
			>
				Logout
			</button>
		</div>
	);
}
