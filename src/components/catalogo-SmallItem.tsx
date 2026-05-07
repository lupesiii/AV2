import { Timer } from "lucide-react";
import type { ComponentProps } from "react";
import Text from "./text";

interface CatalogoSmallItemProps extends ComponentProps<"section"> {
	titulo: string;
	subtitulo: string;
	adicional: string;
}

export default function CatalogoSmallItem({
	titulo,
	subtitulo,
	adicional,
	...props
}: CatalogoSmallItemProps) {
	return (
		<section
			{...props}
			className="flex justify-between items-center p-5 border border-black/10 shadow-lg rounded-md"
		>
			<div className="flex flex-col justify-center gap-2 w-fit">
				<Text>{titulo}</Text>
				<Text variant="sm" color="azul-muted" className="mx-ato">
					{subtitulo}
				</Text>
			</div>
			<div className="inline-flex items-center gap-1 h-fit text-[14px] bg-gray-200 px-2 rounded-2xl lowercase">
				<Text>
					<Timer size="15px" />
				</Text>
				{adicional}
			</div>
		</section>
	);
}
