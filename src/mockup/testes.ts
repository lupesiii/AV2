import { Categoria } from "@/types/categoria";
import { ResultadoTeste, type Teste, TipoTeste } from "@/types/teste";

export const testes: Teste[] = [
	{
		id: "TST-001",
		type: Categoria.teste,
		tipo: TipoTeste.Eletrico,
		resultado: ResultadoTeste.Aprovado,
	},
	{
		id: "TST-002",
		type: Categoria.teste,
		tipo: TipoTeste.Hidraulico,
		resultado: ResultadoTeste.Reprovado,
	},
	{
		id: "TST-003",
		type: Categoria.teste,
		tipo: TipoTeste.Aerodinamico,
		resultado: ResultadoTeste.Aprovado,
	},
	{
		id: "TST-004",
		type: Categoria.teste,
		tipo: TipoTeste.Eletrico,
		resultado: ResultadoTeste.Reprovado,
	},
];
