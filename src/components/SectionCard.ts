import { $, createComponent, tree } from "nine-9";

export default createComponent(
	{
		props: {
			icon: { transform: String, required: true },
			title: { transform: String, required: true },
			desc: { transform: String, required: true },
		},
	},
	(props) => {
		return tree("div")
			.class("card")
			.append(
				tree("div").class("card-icon").append($(props.icon)),
				tree("h3").class("card-title").append($(props.title)),
				tree("p").class("card-text").append($(props.desc))
			);
	}
);
