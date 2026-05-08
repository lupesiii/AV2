import { createContext } from "react";
import type { Funcionario } from "@/types/funcionario";
import type { Aeronave } from "../types/aeronave";
import type { Etapa } from "../types/etapa";
import type { Peca } from "../types/peca";
import type { Teste } from "../types/teste";

export interface ItemContextProps {
	item: Aeronave | Etapa | Peca | Teste | Funcionario;
	setItem: React.Dispatch<
		React.SetStateAction<Aeronave | Etapa | Peca | Teste | Funcionario>
	>;
}

export const ItemContext = createContext<ItemContextProps | null>(null);
