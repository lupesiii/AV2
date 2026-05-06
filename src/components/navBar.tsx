import { Plane } from "lucide-react";
import Container from "./container";
import NavBarItem from "./navbarItem";
import Text from "./text";
import UserTab from "./userTab";

export default function NavBar() {
	return (
		<Container
			as="header"
			size={"header"}
			className="sticky top-0 z-10 mx-auto w-full flex items-center justify-between py-4 px-3 border-b border-black bg-white/90"
		>
			<section className="flex items-center gap-2">
				<span className="bg-azul p-1.5 rounded-md">
					<Plane color="white" />
				</span>
				<Text>Aerocode</Text>
			</section>

			<section className="flex items-center justify-between w-1/3">
				<NavBarItem endpoint="#">Aeronaves</NavBarItem>
				<NavBarItem endpoint="#">Etapas</NavBarItem>
				<NavBarItem endpoint="#">Peças</NavBarItem>
				<NavBarItem endpoint="#">Testes</NavBarItem>
				<NavBarItem endpoint="#">Funcionarios</NavBarItem>
			</section>

			<section>
				<UserTab />
			</section>
		</Container>
	);
}
