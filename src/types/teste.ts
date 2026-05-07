export enum TipoTeste {
	Eletrico = "ELETRICO",
	Hidraulico = "HIDRAULICO",
	Aerodinamico = "AERODINAMICO",
}

export enum ResultadoTeste {
	Aprovado = "APROVADO",
	Reprovado = "REPROVADO",
}

export interface Teste {
	id: string;
	tipo: TipoTeste;
	resultado: ResultadoTeste;
}
