import { type Aeronave, TipoAeronave } from "../types/aeronave";
import { type Etapa, StatusEtapa } from "../types/etapa";
import { type Funcionario, NivelPermissao } from "../types/funcionario";
import { type Peca, StatusPeca, TipoPeca } from "../types/peca";
import { ResultadoTeste, type Teste, TipoTeste } from "../types/teste";

const funcionarios: Funcionario[] = [
	{
		id: "1",
		nome: "Lucas",
		endereco: "Av Joao 11",
		telefone: "110022044",
		usuario: "lupesi",
		senha: "claudio",
		nivelPermissao: NivelPermissao.Administrador,
	},
];

const etapasLista: Etapa[] = [
	{
		nome: "Etapa-1",
		prazo: "8 meses",
		status: StatusEtapa.Concluida,
		funcionarios: funcionarios,
	},

	{
		nome: "Etapa-2",
		prazo: "10 meses",
		status: StatusEtapa.Pendente,
		funcionarios: funcionarios,
	},
];

const pecas: Peca[] = [
	{
		nome: "Filtro de Óleo",
		tipo: TipoPeca.Nacional,
		fornecedor: "AutoParts Brasil",
		status: StatusPeca.pronta,
	},
	{
		nome: "Bomba de Combustível",
		tipo: TipoPeca.Importada,
		fornecedor: "Tokyo Motors",
		status: StatusPeca.transporte,
	},
	{
		nome: "Pastilha de Freio",
		tipo: TipoPeca.Nacional,
		fornecedor: "Freios Sul",
		status: StatusPeca.producao,
	},
	{
		nome: "Sensor ABS",
		tipo: TipoPeca.Importada,
		fornecedor: "German Tech",
		status: StatusPeca.pronta,
	},
	{
		nome: "Radiador",
		tipo: TipoPeca.Nacional,
		fornecedor: "Cooling System BR",
		status: StatusPeca.transporte,
	},
];

const testes: Teste[] = [
	{
		id: "TST-001",
		tipo: TipoTeste.Eletrico,
		resultado: ResultadoTeste.Aprovado,
	},
	{
		id: "TST-002",
		tipo: TipoTeste.Hidraulico,
		resultado: ResultadoTeste.Reprovado,
	},
	{
		id: "TST-003",
		tipo: TipoTeste.Aerodinamico,
		resultado: ResultadoTeste.Aprovado,
	},
	{
		id: "TST-004",
		tipo: TipoTeste.Eletrico,
		resultado: ResultadoTeste.Reprovado,
	},
];

const aeronaves: Aeronave[] = [
	{
		codigo: "NBM-3434",
		modelo: "Bong",
		tipo: TipoAeronave.Comercial,
		alcance: 9500,
		capacidade: 1302,
		etapas: etapasLista,
		pecas: pecas,
		testes: testes,
	},
	{
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

export default function useAeronaves() {
	return aeronaves;
}
