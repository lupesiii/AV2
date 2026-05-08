import { User2Icon } from "lucide-react";
import { useState } from "react";
import { useUsuario } from "../hooks/useUsuario";
import Text from "./text";
import UserOptions from "./userOptions";

export default function UserTab() {
	const [modalState, setModalState] = useState(false);
	const { usuario } = useUsuario();

	function handleModal() {
		setModalState((prev) => !prev);
	}

	return (
		<>
			<button
				type="button"
				className="flex items-center gap-1"
				onClick={handleModal}
			>
				<User2Icon
					className="box-content bg-white border-5 border-white rounded-full"
					size={"2rem"}
				/>
				<Text>{usuario?.usuario}</Text>
			</button>
			{modalState && <UserOptions />}
		</>
	);
}
