import { $, createComponent, styleSet, tree } from "nine-9";

export default createComponent(
	{
		props: {
			module: { transform: String, required: true },
			layer: { transform: String, required: true },
			duty: { transform: String, required: true },
			pattern: { transform: String, required: true },
		},
	},
	(props) => {
		return tree("tr").append(
			tree("td")
				.use(styleSet().color("#58a6ff").fontWeight("600"))
				.append($(props.module)),
			tree("td").append($(props.layer)),
			tree("td").append($(props.duty)),
			tree("td")
				.use(styleSet().color("#8b949e").fontSize("0.82em"))
				.append($(props.pattern))
		);
	}
);
