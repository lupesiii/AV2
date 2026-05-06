import { cx } from "cva";
import type { ComponentProps } from "react";
import { Link } from "react-router";
import Text from "./text";

interface NavBarItemProps extends ComponentProps<"link"> {
	endpoint: string;
}

export default function NavBarItem({
	endpoint,
	className,
	children,
}: NavBarItemProps) {
	return (
		<Link
			to={endpoint}
			className={cx(className, "p-2 rounded-xl hover:bg-black/50")}
		>
			<Text>{children}</Text>
		</Link>
	);
}
