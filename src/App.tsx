import { Route, Routes } from "react-router";
import ProtectedRoute from "./components/protected-route";
import CadastroAeronave from "./pages/cadastroAeronave";
import CadastroEtapa from "./pages/cadastroEtapa";
import CadastroFuncionario from "./pages/cadastroFuncionario";
import CadastroPeca from "./pages/cadastroPeca";
import CadastroTeste from "./pages/cadastroTeste";
import Home from "./pages/home";
import Login from "./pages/login";
import { UpdateUsuario } from "./pages/updateUsuario";

function App() {
	return (
		<Routes>
			<Route path="login" element={<Login />} />
			<Route element={<ProtectedRoute />}>
				<Route index path="/" element={<Home />} />
				<Route path="update" element={<UpdateUsuario />} />
				<Route path="cadastro">
					<Route path="aeronave" element={<CadastroAeronave />} />
					<Route path="etapa" element={<CadastroEtapa />} />
					<Route path="peca" element={<CadastroPeca />} />
					<Route path="teste" element={<CadastroTeste />} />
					<Route path="funcionario" element={<CadastroFuncionario />} />
				</Route>
			</Route>
		</Routes>
	);
}

export default App;
