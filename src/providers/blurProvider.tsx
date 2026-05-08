import { type ReactNode, useState } from "react";
import { BlurContext } from "../context/blurContext";

interface BlurProviderProps {
	children: ReactNode;
}

export default function BlurProvider({ children }: BlurProviderProps) {
	const [visible, setVisible] = useState(false);

	return (
		<BlurContext.Provider value={{ visible, setVisible }}>
			{children}
		</BlurContext.Provider>
	);
}
