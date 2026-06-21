import { $, createComponent, tree } from "nine-9";

export default createComponent(
	{
		props: {
			num: { transform: String, required: true },
			label: { transform: String, required: true },
		},
	},
	(props) => {
		return tree("div")
			.class("pipe-step")
			.append(
				tree("span").class("pipe-num").append($(props.num)),
				tree("span").append($(props.label))
			);
	}
);
