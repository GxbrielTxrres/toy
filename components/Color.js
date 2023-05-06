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

			tl.to(
				color.current,
				{
					r: 0.1,
					g: 0.1,
					b: 0.1,
					duration: 1,
				},
				3,
			);
		}
	}, [tl]);
	return <color ref={color} args={["#000000"]} attach={"background"} />;
}
