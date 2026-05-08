import type { Dispatch, SetStateAction } from "react";
import { useBlur } from "@/hooks/useBlur";
import { useItem } from "@/hooks/useItem";
import { usuarios } from "@/mockup/usuario";
import type { Funcionario } from "@/types/funcionario";
import type { Aeronave } from "../types/aeronave";
import { Categoria } from "../types/categoria";
import type { Etapa } from "../types/etapa";
import type { Peca } from "../types/peca";
import type { Teste } from "../types/teste";
import CatalogoBigItem from "./catalogo-Bigitem";
import CatalogoSmallItem from "./catalogo-SmallItem";

interface CatalogoListProps {
	data: Aeronave[];
	categoria: Categoria;
	setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function CatalogoList({
	data,
	categoria,
	setModalOpen,
}: CatalogoListProps) {
	const { setVisible } = useBlur();
	const { setItem } = useItem();

	function handleItem(item: Aeronave | Etapa | Peca | Teste | Funcionario) {
		setItem(item);
		setVisible(true);
		setModalOpen(true);
	}

	if (Categoria.funcionario === categoria) {
		return usuarios.map((item) => (
			<CatalogoSmallItem
				titulo={item.usuario}
				subtitulo={item.nome}
				adicional={item.nivelPermissao}
				key={item.id}
				onClick={() => handleItem(item)}
			/>
		));
	}

	if (Categoria.etapa === categoria) {
		const etapas = data.flatMap((item) => item.etapas);

		return etapas.map((item, index) => (
			<CatalogoSmallItem
				titulo={item.nome}
				subtitulo={item.prazo}
				adicional={item.status}
				key={`${index} - ${item.id}`}
				onClick={() => handleItem(item)}
			/>
		));
	}

	if (Categoria.peça === categoria) {
		const pecas = data.flatMap((item) => item.pecas);

		return pecas.map((item, index) => (
			<CatalogoBigItem
				titulo={item.nome}
				subtitulo={item.tipo}
				campo1="Fornecedor"
				valor1={item.fornecedor}
				campo2="Status"
				valor2={item.status}
				key={`${index} - ${item.id}`}
				onClick={() => handleItem(item)}
			/>
		));
	}

	if (Categoria.teste === categoria) {
		const testes = data.flatMap((item) => item.testes);

		return testes.map((item, index) => (
			<CatalogoSmallItem
				titulo={item.id}
				subtitulo={item.tipo}
				adicional={item.resultado}
				key={`${index} - ${item.id}`}
				onClick={() => handleItem(item)}
			/>
		));
	}

	return data.map((item, index) => (
		<CatalogoBigItem
			titulo={item.codigo}
			subtitulo={item.modelo}
			campo1="Alcance"
			valor1={item.alcance}
			campo2="Capacidade"
			valor2={item.capacidade}
			key={`${index} - ${item.id}`}
			onClick={() => handleItem(item)}
		/>
	));
}
