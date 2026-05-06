import { Timer } from "lucide-react";
import Text from "./text";

export default function CatalogoSmallItem() {
	return (
		<section className="flex justify-between items-center p-5 border border-black/10 shadow-lg rounded-md">
			<div className="flex flex-col justify-center gap-2 w-fit">
				<Text>Projeto</Text>
				<Text variant="sm" color="azul-muted" className="mx-ato">
					Descricao
				</Text>
			</div>
			<div className="inline-flex items-center gap-1 h-fit text-[14px] bg-gray-200 px-2 rounded-2xl">
				<Text>
					<Timer size="15px" />
				</Text>
				8 meses
			</div>
		</section>
	);
}
