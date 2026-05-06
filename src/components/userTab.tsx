import { User2Icon } from "lucide-react";
import Text from "./text";

export default function UserTab() {
	return (
		<div className="flex items-center gap-2">
			<User2Icon className="box-content bg-white border-5 border-white rounded-full" />
			<Text>Usuario</Text>
		</div>
	);
}
