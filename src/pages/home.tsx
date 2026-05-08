import Blur from "@/components/blur";
import InfoCard from "@/components/info-card";
import { useBlur } from "@/hooks/useBlur";
import { useItem } from "@/hooks/useItem";
import Catalogo from "../components/catalogo";
import NavBar from "../components/navBar";

function Home() {
	const { visible } = useBlur();
	const { item } = useItem();

	return (
		<>
			<NavBar />
			<Catalogo />
			{visible && <Blur />}
			{item && visible && <InfoCard data={item} categoria={item.type} />}
		</>
	);
}

export default Home;
