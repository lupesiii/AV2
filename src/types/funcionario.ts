export enum NivelPermissao {
	Administrador = "ADMINISTRADOR",
	Engenheiro = "ENGENHEIRO",
	Operador = "OPERADOR",
}

export interface Funcionario {
	id: string;
	nome: string;
	telefone: string;
	endereco: string;
	usuario: string;
	senha: string;
	nivelPermissao: NivelPermissao;
}
