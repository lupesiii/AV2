import { type ReactNode, useState } from "react";
import type { Funcionario } from "@/types/funcionario";
import { ItemContext } from "../context/itemContext";
import { type Aeronave, TipoAeronave } from "../types/aeronave";
import { Categoria } from "../types/categoria";
import type { Etapa } from "../types/etapa";
import type { Peca } from "../types/peca";
import type { Teste } from "../types/teste";

const aeronaveMock: Aeronave = {
	id: "0",
	type: Categoria.aeronave,
	codigo: "",
	modelo: "",
	tipo: TipoAeronave.Comercial,
	alcance: 0,
	capacidade: 0,
	etapas: [],
	pecas: [],
	testes: [],
};

interface ItemProviderProps {
	children: ReactNode;
}

export default function ItemProvider({ children }: ItemProviderProps) {
	const [item, setItem] = useState<
		Aeronave | Etapa | Peca | Teste | Funcionario
	>(aeronaveMock);

	return (
		<ItemContext.Provider value={{ item, setItem }}>
			{children}
		</ItemContext.Provider>
	);
}
