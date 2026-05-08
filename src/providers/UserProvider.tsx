import { type ReactNode, useEffect, useState } from "react";
import { usuarios } from "@/mockup/usuario";
import { UserContext } from "../context/userContext";
import type { Funcionario } from "../types/funcionario";

interface UserProviderProps {
	children: ReactNode;
}

export default function UserProvider({ children }: UserProviderProps) {
	const [usuario, setUsuario] = useState<Funcionario | null>(null);
	const idUser = localStorage.getItem("usuarioAtual");

	useEffect(() => {
		if (idUser) {
			const findUser = usuarios.find((user) => {
				if (user.id === idUser) return user;
				return null;
			});

			if (findUser) setUsuario(findUser);
		}
	}, [idUser]);

	return (
		<UserContext.Provider value={{ usuario, setUsuario }}>
			{children}
		</UserContext.Provider>
	);
}
