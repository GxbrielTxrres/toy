import { useLayoutEffect, useRef } from "react";

export default function Color({ tl }) {
	const color = useRef();
	useLayoutEffect(() => {
		console.log(color.current.r);
		if (tl) {
			tl.to(
				color.current,
				{
					r: 0,
					g: 0,
					b: 0,
					duration: 1,
				},
				0,
			);
		}
	}, [tl]);
	return <color ref={color} args={["#ffffff"]} attach={"background"} />;
}
