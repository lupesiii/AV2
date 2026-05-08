import type { Categoria } from "./categoria";
import type { Funcionario } from "./funcionario";

export enum StatusEtapa {
	Pendente = "PENDENTE",
	Andamento = "ANDAMENTO",
	Concluida = "CONCLUIDA",
}

export interface Etapa {
	id: string;
	type: Categoria.etapa;
	nome: string;
	prazo: string;
	status: StatusEtapa;
	funcionarios: Funcionario[];
}
