import type { Funcionario } from "./funcionario";

export enum StatusEtapa {
	Pendente = "PENDENTE",
	Andamento = "ANDAMENTO",
	Concluida = "CONCLUIDA",
}

export interface Etapa {
	nome: string;
	prazo: string;
	status: StatusEtapa;
	funcionarios: Funcionario[];
}
