import { Categoria } from "@/types/categoria";
import { type Etapa, StatusEtapa } from "@/types/etapa";
import { usuarios } from "./usuario";

export const etapas: Etapa[] = [
	{
		id: "1",
		type: Categoria.etapa,
		nome: "Etapa-1",
		prazo: "8 meses",
		status: StatusEtapa.Concluida,
		funcionarios: usuarios,
	},

	{
		id: "2",
		type: Categoria.etapa,
		nome: "Etapa-2",
		prazo: "10 meses",
		status: StatusEtapa.Pendente,
		funcionarios: usuarios,
	},
];
