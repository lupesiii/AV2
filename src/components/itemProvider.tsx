import { type ReactNode, useState } from "react";
import { ItemContext } from "../context/itemContext";
import { type Aeronave, TipoAeronave } from "../types/aeronave";
import type { Etapa } from "../types/etapa";
import type { Peca } from "../types/peca";
import type { Teste } from "../types/teste";

const aeronaveMock: Aeronave = {
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
	const [item, setItem] = useState<Aeronave | Etapa | Peca | Teste>(
		aeronaveMock,
	);

	return (
		<ItemContext.Provider value={{ item, setItem }}>
			{children}
		</ItemContext.Provider>
	);
}
