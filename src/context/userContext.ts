import { createContext, type Dispatch } from "react";
import type { Funcionario } from "@/types/funcionario";

interface UserContextProps {
	usuario: Funcionario | null;
	setUsuario: Dispatch<React.SetStateAction<Funcionario | null>>;
}

export const UserContext = createContext<UserContextProps | null>(null);
