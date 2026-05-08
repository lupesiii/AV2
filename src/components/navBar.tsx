import { Plane } from "lucide-react";
import Container from "./container";
import Text from "./text";
import UserTab from "./userTab";

export default function NavBar() {
	return (
		<Container
			as="header"
			size={"header"}
			className="sticky top-0 z-1 mx-auto w-full flex items-center justify-center
			 py-4 px-3 border-b border-black bg-white/90"
		>
			<section className="flex items-center gap-2">
				<span className="bg-azul p-1.5 rounded-md">
					<Plane color="white" />
				</span>
				<Text>Aerocode</Text>
			</section>

			<section className="absolute right-3">
				<UserTab />
			</section>
		</Container>
	);
}
