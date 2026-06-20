import { createComponent, tree } from "nine-9";

export default createComponent({}, () => {
	return tree("div").append(
		tree("h1").append("Hello Website!!!")
	);
});