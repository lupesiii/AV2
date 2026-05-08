/** biome-ignore-all lint/correctness/useUniqueElementIds: <> */

import { type SubmitEventHandler, useState } from "react";
import { useNavigate } from "react-router";
import { useUsuario } from "@/hooks/useUsuario";
import { usuarios } from "@/mockup/usuario";
import Text from "../components/text";

export default function Login() {
	const navigate = useNavigate();
	const { setUsuario } = useUsuario();

	const [username, setUsername] = useState("");
	const [senha, setSenha] = useState("");

	const login: SubmitEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();

		const findUser = usuarios.find((user) => {
			if (user.usuario === username) {
				return user;
			}
			return null;
		});

		if (findUser && findUser.senha === senha) {
			localStorage.setItem("usuarioAtual", findUser.id);
			setUsuario(findUser);
			navigate("/");
			return;
		}

		alert("Username ou senha incorretos");
	};

	return (
		<main className="w-full h-full flex items-center justify-center">
			<form
				onSubmit={login}
				className="flex flex-col items-center justify-center gap-3 p-5 bg-azul rounded-md"
			>
				<Text as="h1" color="white" variant="lg-bold">
					Login
				</Text>

				<div className="flex flex-col ">
					<label htmlFor="username" className="text-white">
						Username
					</label>
					<input
						type="text"
						id="username"
						onChange={(e) => setUsername(e.target.value)}
						className="border border-white bg-white  rounded-md"
					/>
				</div>

				<div className="flex flex-col ">
					<label htmlFor="senha" className="text-white">
						Senha
					</label>
					<input
						type="password"
						id="senha"
						onChange={(e) => setSenha(e.target.value)}
						className="border border-white  bg-white rounded-md"
					/>
				</div>

				<button
					type="submit"
					className="mt-2 py-2 bg-white text-azul w-full rounded-md"
				>
					Sign In
				</button>
			</form>
		</main>
	);
}
