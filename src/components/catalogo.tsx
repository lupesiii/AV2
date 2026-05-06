import { useState } from "react";
import { Categoria } from "../types/categoria";
import CatalogoBigItem from "./catalogo-Bigitem";
import CatalogoSmallItem from "./catalogo-SmallItem";
import CategoriaSearch from "./categorias-search";
import Container from "./container";
import Text from "./text";

export default function Catalogo() {
	const [categoriaSelected, setCategoriaSelected] = useState<Categoria>(
		Categoria.aeronave,
	);

	return (
		<Container as="main" isAllScreen className="flex-col flex-wrap gap-10 m-5">
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
				<button type="button" className="bg-azul px-3 rounded-md text-white">
					Cadastrar aeronave
				</button>
			</section>

			<section className="grid grid-cols-3 grid-flow-row gap-5">
				<CatalogoBigItem
					titulo="NBM-21453"
					subtitulo="123123fef"
					categoria={Categoria.aeronave}
				/>
				<CatalogoBigItem
					titulo="NBM-21453"
					subtitulo="123123fef"
					categoria={Categoria.etapa}
				/>
			</section>

			<CatalogoSmallItem />
		</Container>
	);
}
