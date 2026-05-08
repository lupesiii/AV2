import { useState } from "react";
import { useNavigate } from "react-router";
import { etapas } from "@/mockup/etapas";
import { pecas } from "@/mockup/pecas";
import { testes } from "@/mockup/testes";
import { usuarios } from "@/mockup/usuario";
import useAeronaves from "../hooks/useAeronaves";
import { Categoria } from "../types/categoria";
import CatalogoList from "./catalogo-list";
import CategoriaSearch from "./categorias-search";
import Container from "./container";
import Text from "./text";

export default function Catalogo() {
	const navigate = useNavigate();
	const [categoriaSelected, setCategoriaSelected] = useState<Categoria>(
		Categoria.aeronave,
	);
	const [_modalOpen, setModelOpen] = useState(false);
	const aeronaves = useAeronaves();

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
				{categoriaSelected === Categoria.aeronave && (
					<button
						type="button"
						onClick={() => navigate("/cadastro/aeronave")}
						className="bg-azul px-3 rounded-md text-white"
					>
						Cadastrar Aeronave
					</button>
				)}
				{categoriaSelected === Categoria.funcionario && (
					<button
						type="button"
						onClick={() => navigate("/cadastro/funcionario")}
						className="bg-azul px-3 rounded-md text-white"
					>
						Cadastrar Funcionario
					</button>
				)}
			</section>

			<section
				className={`grid-cols-3 grid-flow-row gap-5 ${categoriaSelected === Categoria.aeronave ? "grid animate-fadeIn" : "hidden"}`}
			>
				<CatalogoList data={aeronaves} setModalOpen={setModelOpen} />
			</section>

			<section
				className={`grid-cols-3 grid-flow-row gap-5 ${categoriaSelected === Categoria.etapa ? "grid animate-fadeIn" : "hidden"}`}
			>
				<CatalogoList data={etapas} setModalOpen={setModelOpen} />
			</section>

			<section
				className={`grid-cols-3 grid-flow-row gap-5 ${categoriaSelected === Categoria.peça ? "grid animate-fadeIn" : "hidden"}`}
			>
				<CatalogoList data={pecas} setModalOpen={setModelOpen} />
			</section>

			<section
				className={`grid grid-cols-3 grid-flow-row gap-5 ${categoriaSelected === Categoria.teste ? "grid animate-fadeIn" : "hidden"}`}
			>
				<CatalogoList data={testes} setModalOpen={setModelOpen} />
			</section>

			<section
				className={`grid grid-cols-3 grid-flow-row gap-5 ${categoriaSelected === Categoria.funcionario ? "grid animate-fadeIn" : "hidden"}`}
			>
				<CatalogoList data={usuarios} setModalOpen={setModelOpen} />
			</section>
		</Container>
	);
}
