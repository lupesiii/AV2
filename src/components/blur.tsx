import { useContext } from "react";
import { BlurContext } from "../context/blurContext";

export default function Blur() {
	const blurValue = useContext(BlurContext);

	function handleVisible() {
		if (!blurValue) return;

		blurValue.setVisible(!blurValue.visible);
	}

	return (
		<button
			type="button"
			className="absolute inset-0 blur_div"
			onClick={handleVisible}
		></button>
	);
}
