import { Categoria } from "@/types/categoria";
import type { Etapa } from "@/types/etapa";
import type { Peca } from "@/types/peca";
import type { Teste } from "@/types/teste";
import InfoItem from "./info-item";
import Text from "./text";

interface InfoListProps {
	data: Etapa[] | Peca[] | Teste[] | null;
}

export default function InfoList({ data }: InfoListProps) {
	return !data || data.length === 0 ? (
		<Text>Não há cadastro</Text>
	) : (
		data.map((item) => {
			if (item.type === Categoria.etapa) {
				return (
					<InfoItem
						key={item.id}
						titulo={item.nome}
						subtitulo={item.prazo}
						adicional={item.status}
					/>
				);
			}

			if (item.type === Categoria.peça) {
				return (
					<InfoItem
						key={item.id}
						titulo={item.nome}
						subtitulo={item.fornecedor}
						adicional={item.status}
					/>
				);
			}
			return (
				<InfoItem
					key={item.id}
					titulo={item.id}
					subtitulo={item.tipo}
					adicional={item.resultado}
				/>
			);
		})
	);
}
