import { $, createComponent, styleSet, tree } from "nine-9";

export default createComponent(
	{
		props: {
			label: { transform: String, required: true },
			color: { transform: String, required: true },
			type: { transform: String, required: true },
		},
	},
	(props) => {
		return tree("div")
			.class("pipe-step")
			.append(
				tree("span")
					.use(
						styleSet()
							.display("block")
							.fontWeight("600")
							.color(props.color.get())
					)
					.append($(props.label)),
				tree("span")
					.use(styleSet().display("block").fontSize("0.75em").marginTop("4px"))
					.append($(props.type))
			);
	}
);
