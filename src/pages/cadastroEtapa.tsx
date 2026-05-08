// UpdateUsuario.tsx
/** biome-ignore-all lint/a11y/noLabelWithoutControl: <> */

import { type SubmitEventHandler, useState } from "react";
import { useNavigate } from "react-router";
import { useItem } from "@/hooks/useItem";
import { usuarios } from "@/mockup/usuario";
import { Categoria } from "@/types/categoria";
import { type Etapa, StatusEtapa } from "@/types/etapa";
import type { Funcionario } from "@/types/funcionario";

const etapaMock: Etapa = {
	id: "",
	type: Categoria.etapa,
	nome: "",
	prazo: "",
	status: StatusEtapa.Pendente,
	funcionarios: [],
};

export default function CadastroEtapa() {
	const { item } = useItem();
	const [newEtapa, setNewEtapa] = useState<Etapa>(etapaMock);
	const [usuario, setUsuario] = useState("");
	const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
	const navigate = useNavigate();

	const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();

		if (funcionarios.length === 0) {
			alert("Nenhum funcionario adicionado");
			return;
		}

		if (item.type === Categoria.aeronave) {
			const idNewEtapa =
				item.etapas.length === 0
					? 0
					: Number(item.etapas[item.etapas.length - 1].id) + 1;

			item.etapas.push({
				...newEtapa,
				id: idNewEtapa.toString(),
				funcionarios: funcionarios,
			});
		}
		navigate("/");
	};

	function handleChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) {
		const { name, value } = e.target;

		setNewEtapa((prev) => ({ ...prev, [name]: value }));
	}

	function adicionaFuncionario() {
		if (!usuario.trim()) return;
		const exists = funcionarios.find((user) => user.usuario === usuario);
		if (exists) return;

		const funcionario = usuarios.find((user) => user.usuario === usuario);
		if (!funcionario) return;

		setFuncionarios([funcionario, ...funcionarios]);
		setUsuario("");
	}

	return (
		<div className="min-h-screen bg-zinc-100 px-8 py-10">
			<div className="mx-auto max-w-5xl">
				<div className="mb-8 flex items-center justify-between">
					<div>
						<h1 className="text-5xl font-black tracking-wide text-slate-900">
							Cadastro Etapa
						</h1>
					</div>

					<button
						type="button"
						onClick={() => navigate("/")}
						className="rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
					>
						Voltar
					</button>
				</div>

				<div className="rounded-md border border-zinc-200 bg-white p-8 shadow-sm">
					<form
						onSubmit={handleSubmit}
						className="grid grid-cols-1 gap-6 md:grid-cols-2"
					>
						<div>
							<label className="mb-2 block text-sm font-medium text-zinc-700">
								Nome
							</label>

							<input
								type="text"
								name="nome"
								onChange={handleChange}
								className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-slate-900"
								required
							/>
						</div>

						<div>
							<label className="mb-2 block text-sm font-medium text-zinc-700">
								Prazo
							</label>

							<input
								type="text"
								name="prazo"
								onChange={handleChange}
								className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-slate-900"
								required
							/>
						</div>

						<div className="md:col-span-2">
							<label className="mb-2 block text-sm font-medium text-zinc-700">
								Status
							</label>

							<select
								name="status"
								onChange={handleChange}
								className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-slate-900"
								required
							>
								<option value={StatusEtapa.Pendente}>Pendente</option>
								<option value={StatusEtapa.Andamento}>Andamento</option>
								<option value={StatusEtapa.Concluida}>Concluida</option>
							</select>
						</div>

						<div>
							<label className="mb-2 block text-sm font-medium text-zinc-700">
								Funcionarios
							</label>
							<input
								type="text"
								value={usuario}
								className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-slate-900"
								onChange={(e) => setUsuario(e.target.value)}
							/>
						</div>
						<div className="mt-4 flex gap-4">
							<button
								type="button"
								onClick={adicionaFuncionario}
								className="rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
							>
								Adicionar
							</button>
						</div>

						<div className="mt-4 flex gap-4 md:col-span-2">
							<button
								type="submit"
								className="rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
							>
								Salvar Alterações
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
