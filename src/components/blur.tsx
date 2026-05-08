import { useBlur } from "@/hooks/useBlur";

export default function Blur() {
	const { setVisible } = useBlur();

	function handleVisible() {
		setVisible(false);
	}

	return (
		<button
			type="button"
			className="absolute inset-0 blur_div z-2"
			onClick={handleVisible}
		></button>
	);
}
