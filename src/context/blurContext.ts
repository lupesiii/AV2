import { createContext } from "react";

export interface BlurContextProps {
	visible: boolean;
	setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BlurContext = createContext<BlurContextProps | null>(null);
