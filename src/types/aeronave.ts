import type { Etapa } from "./etapa";
import type { Peca } from "./peca";
import type { Teste } from "./teste";

export enum TipoAeronave {
	Comercial = "COMERCIAL",
	Militar = "MILITAR",
}

export interface Aeronave {
	codigo: string;
	modelo: string;
	tipo: TipoAeronave;
	capacidade: number;
	alcance: number;
	pecas: Peca[] | [];
	etapas: Etapa[] | [];
	testes: Teste[] | [];
}
