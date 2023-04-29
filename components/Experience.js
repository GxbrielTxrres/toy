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
				y: -Math.PI / 2,
				duration: 0.5,
				ease: "power3.inOut",
			},
			0.9,
		);

		tl.current.to(
			ref.current.rotation,
			{
				x: Math.sin(Math.PI * 2),
				y: Math.cos(Math.PI * 2),
				duration: 0.5,
			},
			1.5,
		);

		tl.current.to(
			ref.current.position,
			{
				y: 1,
				duration: 1,
			},
			1.5,
		);

		tl.current.to(
			camera.position,
			{
				y: -5,
				duration: 2,
			},
			1.5,
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
			<mesh ref={ref} position={[10, 0, 5]}>
				<boxGeometry />
				<meshStandardMaterial />
			</mesh>
			<Masks />
		</>
	);
}
