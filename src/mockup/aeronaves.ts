import { etapas } from "@/mockup/etapas";
import { pecas } from "@/mockup/pecas";
import { testes } from "@/mockup/testes";
import { type Aeronave, TipoAeronave } from "../types/aeronave";
import { Categoria } from "../types/categoria";

export const aeronaves: Aeronave[] = [
	{
		id: "1",
		type: Categoria.aeronave,
		codigo: "NBM-3434",
		modelo: "Bong",
		tipo: TipoAeronave.Comercial,
		alcance: 9500,
		capacidade: 1302,
		etapas: etapas,
		pecas: pecas,
		testes: testes,
	},
	{
		id: "2",
		type: Categoria.aeronave,
		codigo: "NBM-341234",
		modelo: "Fusca",
		tipo: TipoAeronave.Militar,
		alcance: 10000,
		capacidade: 2,
		etapas: [],
		pecas: [],
		testes: [],
	},
];
