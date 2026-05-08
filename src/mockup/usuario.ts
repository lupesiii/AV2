import { Categoria } from "@/types/categoria";
import { type Funcionario, NivelPermissao } from "@/types/funcionario";

export const usuarios: Funcionario[] = [
	{
		id: "1",
		type: Categoria.funcionario,
		nome: "Lucas",
		endereco: "Av Joao 11",
		telefone: "110022044",
		usuario: "lupesi",
		senha: "claudio",
		nivelPermissao: NivelPermissao.Administrador,
	},
];
