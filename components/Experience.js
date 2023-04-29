import Effects from "./Effects";
import Masks from "./Masks";

import { Environment, OrbitControls, useScroll } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useLayoutEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";

export default function Experience() {
	const ref = useRef();
	const tl = useRef();
	const scroll = useScroll();

	useLayoutEffect(() => {
		tl.current = gsap.timeline();

		tl.current.to(
			ref.current.target,
			{
				x: 7,
				duration: 1,
			},
			0,
		);
		tl.current.to(
			ref.current.object.position,
			{
				x: 7,
				duration: 1,
			},
			0,
		);
		tl.current.to(
			ref.current.object.rotation,
			{
				y: -Math.PI,
				duration: 0.5,
				ease: "power3.inOut",
			},
			0.75,
		);
	}, []);

	useFrame(() => {
		tl.current.seek(scroll.offset * tl.current.duration());
	});

	return (
		<>
			<Perf />
			<Effects />
			<color args={["#ffffff"]} attach={"background"} />
			<Environment preset="night" />
			<Masks />
			<OrbitControls enabled={false} ref={ref} />
		</>
	);
}
