import { Plus, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useBlur } from "@/hooks/useBlur";
import { useCatalogoStore } from "@/store/catalogoData";
import type { Funcionario } from "@/types/funcionario";
import type { Aeronave } from "../types/aeronave";
import { Categoria } from "../types/categoria";
import { type Etapa, StatusEtapa } from "../types/etapa";
import { type Peca, StatusPeca } from "../types/peca";
import { ResultadoTeste, type Teste } from "../types/teste";
import IconCategoria from "./icon-categoria";
import InfoLabel from "./info-iabel";
import InfoList from "./info-list";
import Text from "./text";

interface InfoProps {
	data: Aeronave | Etapa | Peca | Teste | Funcionario;
	categoria: Categoria;
}

export default function InfoCard({ data, categoria }: InfoProps) {
	const navigate = useNavigate();
	const { setVisible } = useBlur();
	const [itemInfo, setItemInfo] = useState(data);
	const { catalogoData, setCatalogoData } = useCatalogoStore();

	function handleVisible() {
		setVisible(false);
		// setModalOpen(false);
	}

	const infoInp = Object.entries(itemInfo).map((obj) => {
		if (typeof obj[1] === "object") return null;
		if (obj[0] === "type") return null;
		if (obj[0] === "id") return null;

		return obj;
	});

	let etapas = null;
	let pecas = null;
	let testes = null;
	if (itemInfo.type === Categoria.aeronave) {
		etapas = itemInfo.etapas;
		pecas = itemInfo.pecas;
		testes = itemInfo.testes;
	}

	function aprovarTeste(teste: Teste) {
		setItemInfo({ ...teste, resultado: ResultadoTeste.Aprovado });

		const aeronaveIndex = catalogoData.findIndex((item) =>
			item.testes.some((testeItem) => testeItem.id === teste.id),
		);

		if (aeronaveIndex === -1) {
			throw new Error("Erro: teste sem aeronave");
		}

		const aeronaves = [...catalogoData];
		aeronaves[aeronaveIndex].testes.map((item) => {
			if (item.id === teste.id) {
				item.resultado = ResultadoTeste.Aprovado;
			}
			return item;
		});
		setCatalogoData(aeronaves);
		teste.resultado = ResultadoTeste.Aprovado;
	}

	function atualizarStatusPeca(peca: Peca) {
		const newStatus =
			peca.status === StatusPeca.producao
				? StatusPeca.transporte
				: StatusPeca.pronta;

		peca.status = newStatus;
		setItemInfo({ ...peca, status: newStatus });
		setCatalogoData(
			catalogoData.map((aeronave) => ({
				...aeronave,
				pecas: aeronave.pecas.map((item) =>
					item.id === peca.id
						? {
								...item,
								status: newStatus,
							}
						: item,
				),
			})),
		);
	}

	function atualizarStatusEtapa(etapa: Etapa) {
		const newStatus =
			etapa.status === StatusEtapa.Pendente
				? StatusEtapa.Andamento
				: StatusEtapa.Concluida;

		const aeronave = catalogoData.find((item) =>
			item.etapas.some((etapaItem) => etapaItem.id === etapa.id),
		);

		if (!aeronave) {
			throw new Error("Erro: etapa sem aeronave");
		}

		const etapaIndex = aeronave.etapas.findIndex(
			(item) => item.id === etapa.id,
		);

		const etapaAnterior =
			etapaIndex > 0 ? aeronave.etapas[etapaIndex - 1] : null;

		if (etapaAnterior && etapaAnterior.status !== StatusEtapa.Concluida) {
			alert("Etapa anterior não concluida");
			return;
		}

		setCatalogoData(
			catalogoData.map((item) => ({
				...item,
				etapas: item.etapas.map((etapaItem) =>
					etapaItem.id === etapa.id
						? {
								...etapaItem,
								status: newStatus,
							}
						: etapaItem,
				),
			})),
		);

		setItemInfo({
			...etapa,
			status: newStatus,
		});

		etapa.status = newStatus;
	}

	return (
		<form className="absolute top-30 w-7/10 max-h-3/4 z-3 overflow-auto left-1/2 -translate-x-1/2 bg-white shadow-2xl rounded-lg">
			<nav className="relative flex items-center justify-center p-2 border-b border-black">
				<Text>{categoria}</Text>

				<X className="absolute right-2 top-1" onClick={handleVisible} />
			</nav>

			<main className="space-y-5 p-5">
				<section className="flex items-center justify-between pb-5 border-b border-black">
					<div className="flex items-center gap-2">
						<span className="border border-black p-2.5">
							<IconCategoria
								categoria={categoria}
								color={"black"}
								size={"40px"}
							/>
						</span>
						<article className="flex flex-col justify-center">
							<Text variant="lg" className="first-letter:uppercase">
								{categoria}
							</Text>
						</article>
					</div>

					{data.type === Categoria.aeronave && (
						<button
							type="button"
							className="bg-azul h-fit p-2 text-white rounded-md"
							onClick={() => alert("teste")}
						>
							Fazer Relatório
						</button>
					)}
				</section>

				<section className="flex flex-col gap-2.5 pb-5 border-b border-black">
					<Text variant={"lg"}>Informações</Text>

					<div className="grid grid-cols-3 grid-flow-row items-center gap-2">
						{/** biome-ignore lint/suspicious/useIterableCallbackReturn: <Caso o return null não esteja, o código não funcionará :)> */}
						{infoInp.map((info, index) => {
							if (info) {
								return (
									<InfoLabel
										label={info[0]}
										info={info[1]}
										key={`${index} - ${info}`}
									/>
								);
							}
							return;
						})}
					</div>
				</section>

				{itemInfo.type === Categoria.teste &&
					itemInfo.resultado !== ResultadoTeste.Aprovado && (
						<section>
							<button
								type="button"
								className="rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
								onClick={() => aprovarTeste(itemInfo)}
							>
								Aprovar
							</button>
						</section>
					)}

				{data.type === Categoria.peça && data.status !== StatusPeca.pronta && (
					<section>
						<button
							type="button"
							className="rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
							onClick={() => atualizarStatusPeca(data)}
						>
							{data.status === StatusPeca.producao ? "Em Transporte" : "Pronta"}
						</button>
					</section>
				)}

				{data.type === Categoria.etapa && (
					<>
						<section className="space-y-5">
							<div className="grid grid-cols-2 grid-flow-row gap-3 pb-5 border-b border-black">
								<Text className="col-span-2 flex items-center gap-1">
									Funcionário
								</Text>

								<InfoList data={data.funcionarios} />
							</div>
						</section>

						{data.status !== StatusEtapa.Concluida && (
							<section>
								<button
									type="button"
									className="rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
									onClick={() => atualizarStatusEtapa(data)}
								>
									{data.status === StatusEtapa.Pendente
										? "Iniciar Etapa"
										: "Concluir"}
								</button>
							</section>
						)}
					</>
				)}

				{data.type === Categoria.aeronave && (
					<section className="space-y-5">
						<div className="grid grid-cols-2 grid-flow-row gap-3 pb-5 border-b border-black">
							<Text
								className="col-span-2 flex items-center gap-1"
								onClick={() => navigate("/cadastro/etapa")}
							>
								Etapas <Plus size={"20px"} />
							</Text>

							<InfoList data={etapas} />
						</div>

						<div className="grid grid-cols-2 grid-flow-row gap-3 pb-5 border-b border-black">
							<Text
								className="col-span-2 flex items-center gap-1"
								onClick={() => navigate("/cadastro/peca")}
							>
								Peças <Plus size={"20px"} />
							</Text>

							<InfoList data={pecas} />
						</div>

						<div className="grid grid-cols-2 grid-flow-row gap-3 pb-5 border-b border-black">
							<Text
								className="col-span-2 flex items-center gap-1"
								onClick={() => navigate("/cadastro/teste")}
							>
								Testes <Plus size={"20px"} />
							</Text>

							<InfoList data={testes} />
						</div>
					</section>
				)}
			</main>
		</form>
	);
}
