import { useContext } from "react";
import { BlurContext } from "@/context/blurContext";

export const useBlur = () => {
	const blurContext = useContext(BlurContext);

	if (!blurContext)
		throw new Error("useBlur precisa estar dentro do BlurProvider");

	return blurContext;
};
