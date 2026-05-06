import { cva, cx, type VariantProps } from "cva";
import { type ComponentProps, createElement } from "react";

export const textVariants = cva("max-w-fit max-h-fit m-0 p-0 leading-none", {
	variants: {
		variant: {
			sm: "text-[12px] font-normal font-mono",
			md: "text-[16px] font-normal font-mono",
			lg: "text-[28px] font-normal font-mono",
			"lg-bold": "text-[36px] font-extrabold font-mono",
		},
		color: {
			muted: "text-white/90",
			white: "text-white",
			"azul-muted": "text-azul/90",
			azul: "text-azul",
		},
		isTitle: {
			true: "uppercase",
		},
	},
	defaultVariants: {
		variant: "md",
		color: "azul",
		isTitle: false,
	},
});

interface TextProps
	extends VariantProps<typeof textVariants>,
		Omit<ComponentProps<"span">, "color" | "title"> {
	as?: keyof React.JSX.IntrinsicElements;
}

export default function Text({
	as = "span",
	variant,
	color,
	isTitle,
	className,
	children,
	...props
}: TextProps) {
	return createElement(
		as,
		{
			className: cx(
				textVariants({
					variant,
					isTitle,
					color,
					className,
				}),
			),
			...props,
		},
		children,
	);
}
