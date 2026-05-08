import { useContext } from "react";
import { UserContext } from "@/context/userContext";

export const useUsuario = () => {
	const userContext = useContext(UserContext);

	if (!userContext) {
		throw new Error("useUsuario precisa estar dentro do UserProvider");
	}

	const usuario = userContext.usuario;
	const setUsuario = userContext.setUsuario;

	return { usuario, setUsuario };
};
