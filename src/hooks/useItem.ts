import { useContext } from "react";
import { ItemContext } from "@/context/itemContext";

export const useItem = () => {
	const itemContext = useContext(ItemContext);

	if (!itemContext)
		throw new Error("useItem precisa estar dentro do ItemProvider");

	return itemContext;
};
