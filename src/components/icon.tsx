import type { LucideProps } from "lucide-react";
import type { ComponentProps, FC } from "react";

interface IconProps extends ComponentProps<"svg"> {
	svg: React.ComponentType<LucideProps>;
}

export default function Icon({
	svg: SvgComponent,
	className,
	...props
}: IconProps) {
	return (
		<span className={className}>
			<SvgComponent color="white" {...props}></SvgComponent>
		</span>
	);
}
