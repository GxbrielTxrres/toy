import Effects from "./Effects";
import Masks from "./Masks";

import { Environment, OrbitControls, useScroll } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useLayoutEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";

export default function Experience() {
	const ref = useRef();
	const tl = useRef();
	const scroll = useScroll();
	const { camera } = useThree();
	useLayoutEffect(() => {
		tl.current = gsap.timeline();

		tl.current.to(
			camera.position,
			{
				x: 7,
				duration: 1,
				ease: "power3.in",
			},
			0,
		);

		tl.current.to(
			camera.rotation,
			{
				y: -Math.PI,
				duration: 0.5,
				ease: "power3.inOut",
			},
			0.9,
		);
	}, []);

	useFrame(() => {
		if (tl.current) {
			tl.current.seek(scroll.offset * tl.current.duration());
		}
	});

	return (
		<>
			<Perf />
			<Effects />
			<color args={["#ffffff"]} attach={"background"} />
			<Environment preset="night" />

			<Masks />
		</>
	);
}
