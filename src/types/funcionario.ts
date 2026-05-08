import type { Categoria } from "./categoria";

export enum NivelPermissao {
	Administrador = "ADMINISTRADOR",
	Engenheiro = "ENGENHEIRO",
	Operador = "OPERADOR",
}

export interface Funcionario {
	id: string;
	type: Categoria.funcionario;
	nome: string;
	telefone: string;
	endereco: string;
	usuario: string;
	senha: string;
	nivelPermissao: NivelPermissao;
}
