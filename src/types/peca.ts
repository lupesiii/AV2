export enum TipoPeca {
	Nacional = "NACIONAL",
	Importada = "IMPORTADA",
}

export enum StatusPeca {
	producao = "EM_PRODUCAO",
	transporte = "EM_TRANSPORTE",
	pronta = "PRONTA",
}

export interface Peca {
	nome: string;
	tipo: TipoPeca;
	fornecedor: string;
	status: StatusPeca;
}
