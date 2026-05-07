import { useContext } from "react";
import Catalogo from "./components/catalogo";
import NavBar from "./components/navBar";
import { BlurContext } from "./context/blurContext";

function App() {
	const blurValue = useContext(BlurContext);

	if (!blurValue) return;

	return (
		<>
			<NavBar />
			<Catalogo />
			{/* {blurValue.visible && <Blur />} */}
		</>
	);
}

export default App;
