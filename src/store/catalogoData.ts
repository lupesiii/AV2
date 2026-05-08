import { create } from "zustand";
import type { Aeronave } from "@/types/aeronave";

interface CatalogoStore {
	catalogoData: Aeronave[];
	setCatalogoData: (data: Aeronave[]) => void;
}

export const useCatalogoStore = create<CatalogoStore>((set) => ({
	catalogoData: [],
	setCatalogoData: (data) => set({ catalogoData: data }),
}));
