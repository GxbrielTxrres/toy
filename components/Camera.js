import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useLayoutEffect } from "react";

export default function Camera({ tl }) {
	const { camera, size } = useThree();

	useEffect(() => {
		if (size.width <= 600) {
			camera.fov = 100;
		} else {
			camera.fov = 60;
		}
	}, []);

	useLayoutEffect(() => {
		if (tl) {
			tl.to(
				camera.position,
				{
					y: -1.25,
					z: -3,
					duration: 3,
					ease: "power3.in",
				},
				0,
			);

			tl.to(
				camera.rotation,
				{
					x: Math.PI * 0.025,
					duration: 0.5,
					ease: "power3.out",
				},
				2.5,
			);
		}
	}, [tl]);

	return;
}
