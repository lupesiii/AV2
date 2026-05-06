import { cva, type VariantProps } from "cva";
import { createElement } from "react";

export const containerVariants = cva("mx-auto flex", {
	variants: {
		size: {
			header: "max-w-full",
			md: "max-w-[90w] lg:max-w-350 px-[2em]",
		},
		isAllScreen: {
			true: "min-h-dvh",
		},
	},
	defaultVariants: {
		size: "md",
		isAllScreen: false,
	},
});

interface ContainerProps
	extends VariantProps<typeof containerVariants>,
		React.ComponentProps<"div"> {
	as?: keyof React.JSX.IntrinsicElements;
}

export default function Container({
	as = "div",
	size,
	isAllScreen,
	className,
	children,
	...props
}: ContainerProps) {
	return createElement(
		as,
		{
			className: containerVariants({ size, isAllScreen, className }),
			...props,
		},
		children,
	);
}
