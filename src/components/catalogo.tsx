import { useContext, useState } from "react";
import { BlurContext } from "../context/blurContext";
import { ItemContext } from "../context/itemContext";
import useAeronaves from "../hook/useAeronaves";
import { Categoria } from "../types/categoria";
import CatalogoList from "./catalogo-list";
import CategoriaSearch from "./categorias-search";
import Container from "./container";
import InfoCard from "./info-card";
import Text from "./text";

export default function Catalogo() {
	const [categoriaSelected, setCategoriaSelected] = useState<Categoria>(
		Categoria.aeronave,
	);
	const [modalOpen, setModelOpen] = useState(false);

	const aeronaves = useAeronaves();
	const itemValue = useContext(ItemContext);
	const blurValue = useContext(BlurContext);

	function handleVisible() {
		if (!blurValue) return;

		blurValue.setVisible(!blurValue.visible);
	}

	return (
		<Container
			as="main"
			className="overflow-hidden flex-col flex-wrap gap-10 m-5 relative min-h-9/10"
		>
			<section>
				<Text as="h1" variant="lg-bold">
					Catalogo
				</Text>
				<Text>Busque por categorias</Text>
			</section>

			<section className="flex justify-between">
				<CategoriaSearch
					categoriaSelected={categoriaSelected}
					setCategoriaSelected={setCategoriaSelected}
					className="justify-self-end row-start-2 row-end-2"
				/>
				<button
					type="button"
					onClick={handleVisible}
					className="bg-azul px-3 rounded-md text-white"
				>
					Cadastrar aeronave
				</button>
			</section>

			<section
				className={`grid-cols-3 grid-flow-row gap-5 ${categoriaSelected === Categoria.aeronave ? "grid animate-fadeIn" : "hidden"}`}
			>
				<CatalogoList
					data={aeronaves}
					categoria={Categoria.aeronave}
					setModalOpen={setModelOpen}
				/>
			</section>

			<section
				className={`grid-cols-3 grid-flow-row gap-5 ${categoriaSelected === Categoria.etapa ? "grid animate-fadeIn" : "hidden"}`}
			>
				<CatalogoList
					data={aeronaves.flatMap((item) => item.etapas)}
					categoria={Categoria.etapa}
					setModalOpen={setModelOpen}
				/>
			</section>

			<section
				className={`grid-cols-3 grid-flow-row gap-5 ${categoriaSelected === Categoria.peça ? "grid animate-fadeIn" : "hidden"}`}
			>
				<CatalogoList
					data={aeronaves.flatMap((item) => item.pecas)}
					categoria={Categoria.peça}
					setModalOpen={setModelOpen}
				/>
			</section>

			<section
				className={`grid grid-cols-3 grid-flow-row gap-5 ${categoriaSelected === Categoria.teste ? "grid animate-fadeIn" : "hidden"}`}
			>
				<CatalogoList
					data={aeronaves.flatMap((item) => item.testes)}
					categoria={Categoria.teste}
					setModalOpen={setModelOpen}
				/>
			</section>

			{itemValue?.item && modalOpen && (
				<InfoCard
					data={itemValue.item}
					titulo="Teste"
					subtitulo="Teste"
					categoria={categoriaSelected}
					setModalOpen={setModelOpen}
				/>
			)}
		</Container>
	);
}
