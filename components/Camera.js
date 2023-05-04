import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";

export default function Camera({ tl }) {
	const { camera } = useThree();

	useLayoutEffect(() => {
		if (tl) {
			tl.to(
				camera.position,
				{
					x: 7,
					duration: 3,
					ease: "power3.in",
				},
				0,
			);

			tl.to(
				camera.rotation,
				{
					y: -Math.PI / 2,
					duration: 0.5,
					ease: "power3.inOut",
				},
				2.75,
			);

			tl.to(
				camera.position,
				{
					z: 10,
				},
				3,
			);
		}
	}, [tl]);

	return;
}
