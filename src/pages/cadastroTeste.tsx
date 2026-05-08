// UpdateUsuario.tsx
/** biome-ignore-all lint/a11y/noLabelWithoutControl: <> */

import { type SubmitEventHandler, useState } from "react";
import { useNavigate } from "react-router";
import { useItem } from "@/hooks/useItem";
import { testes } from "@/mockup/testes";
import { Categoria } from "@/types/categoria";
import { ResultadoTeste, type Teste, TipoTeste } from "@/types/teste";

const testeMock: Teste = {
	id: "",
	type: Categoria.teste,
	tipo: TipoTeste.Aerodinamico,
	resultado: ResultadoTeste.Reprovado,
};

export default function CadastroTeste() {
	const { item } = useItem();
	const [newTeste, setNewTeste] = useState<Teste>(testeMock);
	const navigate = useNavigate();

	const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();

		const exists = testes.some((teste) => teste.id === newTeste.id);
		if (exists) {
			alert("Código já existente");
			return;
		}

		if (item.type === Categoria.aeronave) {
			item.testes.push(newTeste);
		}
		navigate("/");
	};

	function handleChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) {
		const { name, value } = e.target;

		setNewTeste((prev) => ({ ...prev, [name]: value }));
	}

	return (
		<div className="min-h-screen bg-zinc-100 px-8 py-10">
			<div className="mx-auto max-w-5xl">
				<div className="mb-8 flex items-center justify-between">
					<div>
						<h1 className="text-5xl font-black tracking-wide text-slate-900">
							Cadastro Teste
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
								id
							</label>

							<input
								type="text"
								name="id"
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
								<option value={TipoTeste.Aerodinamico}>Aerodinamico</option>
								<option value={TipoTeste.Eletrico}>Eletrico</option>
								<option value={TipoTeste.Hidraulico}>Hidraulico</option>
							</select>
						</div>

						<div>
							<label className="mb-2 block text-sm font-medium text-zinc-700">
								Resultado
							</label>

							<select
								name="resultado"
								onChange={handleChange}
								className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-slate-900"
								required
							>
								<option value={ResultadoTeste.Reprovado}>Reprovado</option>
								<option value={ResultadoTeste.Aprovado}>Aprovado</option>
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
