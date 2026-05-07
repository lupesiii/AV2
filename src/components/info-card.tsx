import { Plane, X } from "lucide-react";
import { type Dispatch, useContext } from "react";
import { BlurContext } from "../context/blurContext";
import type { Aeronave } from "../types/aeronave";
import type { Categoria } from "../types/categoria";
import type { Etapa } from "../types/etapa";
import type { Peca } from "../types/peca";
import type { Teste } from "../types/teste";
import InfoLabel from "./info-iabel";
import Text from "./text";

interface InfoProps {
	data: Aeronave | Etapa | Peca | Teste;
	titulo: string;
	subtitulo: string;
	categoria: Categoria;
	setModalOpen: Dispatch<React.SetStateAction<boolean>>;
}

export default function InfoCard({
	data,
	titulo,
	subtitulo,
	categoria,
	setModalOpen,
}: InfoProps) {
	const blurValue = useContext(BlurContext);

	function handleVisible() {
		setModalOpen((prev: boolean) => !prev);
	}

	return (
		<form className="absolute w-7/10 h-fit left-1/2 top-1/2 -translate-1/2 bg-white shadow-xl">
			<nav className="relative flex items-center justify-center p-2 border-b border-black">
				<Text>{categoria}</Text>

				<X className="absolute right-2 top-1" onClick={handleVisible} />
			</nav>

			<main className="space-y-5 p-5">
				<section className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<span className="border border-black p-2.5">
							<Plane size={"40px"} />
						</span>
						<article className="flex flex-col justify-center">
							<Text variant="sm" color="azul-muted">
								{subtitulo}
							</Text>
							<Text variant="lg" className="first-letter:uppercase">
								{titulo}
							</Text>
						</article>
					</div>
					<button
						type="button"
						className="bg-azul h-fit p-2 text-white rounded-md"
						onClick={() => alert("teste")}
					>
						Fazer Relatório
					</button>
				</section>
				<section>
					<Text>Informações</Text>

					<div className="grid grid-cols-3 grid-flow-row items-center gap-2">
						{/** biome-ignore lint/suspicious/useIterableCallbackReturn: <Caso o return null não esteja, o código não funcionará :)> */}
						{Object.entries(data).map((obj, index) => {
							if (typeof obj[1] === "object") {
								console.log("não");
								return;
							}

							return (
								<InfoLabel
									label={obj[0]}
									info={obj[1]}
									key={`${index} - ${obj}`}
								/>
							);
						})}
					</div>
				</section>
			</main>
		</form>
	);
}
