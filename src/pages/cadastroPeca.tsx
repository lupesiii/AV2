// UpdateUsuario.tsx
/** biome-ignore-all lint/a11y/noLabelWithoutControl: <> */

import { type SubmitEventHandler, useState } from "react";
import { useNavigate } from "react-router";
import { useItem } from "@/hooks/useItem";
import { Categoria } from "@/types/categoria";
import { type Peca, StatusPeca, TipoPeca } from "@/types/peca";

const pecaMock: Peca = {
	id: "0",
	type: Categoria.peça,
	nome: "",
	fornecedor: "",
	tipo: TipoPeca.Importada,
	status: StatusPeca.producao,
};

export default function CadastroPeca() {
	const { item } = useItem();
	const [newPeca, setNewPeca] = useState<Peca>(pecaMock);
	const navigate = useNavigate();

	const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();

		if (item.type === Categoria.aeronave) {
			const idNewPeca =
				item.pecas.length === 0
					? 0
					: Number(item.pecas[item.pecas.length - 1].id) + 1;

			item.pecas.push({ ...newPeca, id: idNewPeca.toString() });
		}
		navigate("/");
	};

	function handleChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) {
		const { name, value } = e.target;

		setNewPeca((prev) => ({ ...prev, [name]: value }));
	}

	return (
		<div className="min-h-screen bg-zinc-100 px-8 py-10">
			<div className="mx-auto max-w-5xl">
				<div className="mb-8 flex items-center justify-between">
					<div>
						<h1 className="text-5xl font-black tracking-wide text-slate-900">
							Cadastro Peça
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
								Fornecedor
							</label>

							<input
								type="text"
								name="fornecedor"
								onChange={handleChange}
								className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-slate-900"
								required
							/>
						</div>

						<div>
							<label className="mb-2 block text-sm font-medium text-zinc-700">
								Tipo
							</label>

							<select
								name="tipo"
								onChange={handleChange}
								className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-slate-900"
								required
							>
								<option value={TipoPeca.Nacional}>Nacional</option>
								<option value={TipoPeca.Importada}>Importada</option>
							</select>
						</div>

						<div>
							<label className="mb-2 block text-sm font-medium text-zinc-700">
								Status
							</label>

							<select
								name="status"
								onChange={handleChange}
								className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-slate-900"
								required
							>
								<option value={StatusPeca.producao}>Producao</option>
								<option value={StatusPeca.transporte}>Transporte</option>
								<option value={StatusPeca.pronta}>Pronta</option>
							</select>
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
