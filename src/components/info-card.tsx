import { Plus, X } from "lucide-react";
import { useNavigate } from "react-router";
import { useBlur } from "@/hooks/useBlur";
import type { Funcionario } from "@/types/funcionario";
import type { Aeronave } from "../types/aeronave";
import { Categoria } from "../types/categoria";
import type { Etapa } from "../types/etapa";
import type { Peca } from "../types/peca";
import type { Teste } from "../types/teste";
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

	function handleVisible() {
		setVisible(false);
		// setModalOpen(false);
	}

	const infoInp = Object.entries(data).map((obj) => {
		if (typeof obj[1] === "object") return null;
		if (obj[0] === "type") return null;
		if (obj[0] === "id") return null;

		return obj;
	});

	let etapas = null;
	let pecas = null;
	let testes = null;
	if (data.type === Categoria.aeronave) {
		etapas = data.etapas;
		pecas = data.pecas;
		testes = data.testes;
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
