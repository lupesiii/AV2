// UpdateUsuario.tsx
/** biome-ignore-all lint/a11y/noLabelWithoutControl: <> */

import { type SubmitEventHandler, useState } from "react";
import { useNavigate } from "react-router";
import { usuarios } from "@/mockup/usuario";
import { Categoria } from "@/types/categoria";
import { type Funcionario, NivelPermissao } from "@/types/funcionario";

const usuarioMock: Funcionario = {
	id: "",
	type: Categoria.funcionario,
	nome: "",
	telefone: "",
	endereco: "",
	usuario: "",
	senha: "",
	nivelPermissao: NivelPermissao.Operador,
};

export default function cadastroFuncionario() {
	const [newUsuario, setNewUsuario] = useState<Funcionario>(usuarioMock);
	const navigate = useNavigate();

	const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();

		const exists = usuarios.some((user) => user.usuario === newUsuario.usuario);
		if (exists) {
			alert("Código já existente");
			return;
		}

		const idNewUsuario = crypto.randomUUID;
		usuarios.push({ ...newUsuario, id: idNewUsuario.toString() });
	};

	function handleChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) {
		const { name, value } = e.target;

		setNewUsuario((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	return (
		<div className="min-h-screen bg-zinc-100 px-8 py-10">
			<div className="mx-auto max-w-5xl">
				<div className="mb-8 flex items-center justify-between">
					<div>
						<h1 className="text-5xl font-black tracking-wide text-slate-900">
							Cadastro Funcionário
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
							/>
						</div>

						<div>
							<label className="mb-2 block text-sm font-medium text-zinc-700">
								Telefone
							</label>

							<input
								type="text"
								name="telefone"
								onChange={handleChange}
								className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-slate-900"
							/>
						</div>

						<div>
							<label className="mb-2 block text-sm font-medium text-zinc-700">
								Endereço
							</label>

							<input
								type="text"
								name="endereco"
								onChange={handleChange}
								className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-slate-900"
							/>
						</div>

						<div>
							<label className="mb-2 block text-sm font-medium text-zinc-700">
								Nível de Permissão
							</label>

							<select
								name="nivelPermissao"
								onChange={handleChange}
								className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-slate-900"
							>
								<option value={NivelPermissao.Administrador}>
									Administrador
								</option>
								<option value={NivelPermissao.Engenheiro}>Engenheiro</option>
								<option value={NivelPermissao.Operador}>Operador</option>
							</select>
						</div>

						<div>
							<label className="mb-2 block text-sm font-medium text-zinc-700">
								Usuário
							</label>

							<input
								type="text"
								name="usuario"
								onChange={handleChange}
								className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-slate-900"
							/>
						</div>

						<div>
							<label className="mb-2 block text-sm font-medium text-zinc-700">
								Senha
							</label>

							<input
								type="password"
								name="senha"
								onChange={handleChange}
								placeholder="Digite uma senha"
								className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-slate-900"
							/>
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
