import { Categoria } from "@/types/categoria";
import { type Peca, StatusPeca, TipoPeca } from "@/types/peca";

export const pecas: Peca[] = [
	{
		id: "1",
		type: Categoria.peça,
		nome: "Filtro de Óleo",
		tipo: TipoPeca.Nacional,
		fornecedor: "AutoParts Brasil",
		status: StatusPeca.pronta,
	},
	{
		id: "2",
		type: Categoria.peça,
		nome: "Bomba de Combustível",
		tipo: TipoPeca.Importada,
		fornecedor: "Tokyo Motors",
		status: StatusPeca.transporte,
	},
	{
		id: "3",
		type: Categoria.peça,
		nome: "Pastilha de Freio",
		tipo: TipoPeca.Nacional,
		fornecedor: "Freios Sul",
		status: StatusPeca.producao,
	},
	{
		id: "4",
		type: Categoria.peça,
		nome: "Sensor ABS",
		tipo: TipoPeca.Importada,
		fornecedor: "German Tech",
		status: StatusPeca.pronta,
	},
	{
		id: "5",
		type: Categoria.peça,
		nome: "Radiador",
		tipo: TipoPeca.Nacional,
		fornecedor: "Cooling System BR",
		status: StatusPeca.transporte,
	},
];
