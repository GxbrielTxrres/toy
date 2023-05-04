import Effects from "./Effects";
import Masks from "./Masks";

import { Environment, OrbitControls, useScroll } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useLayoutEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import Camera from "./Camera";
import Color from "./Color";
import InstancedParticles from "./Particles";
import NoiseInstances from "./NoiseInstances";

export default function Experience() {
	const [tl, setTl] = useState();
	const timeline = useRef();
	const color = useRef();

	const scroll = useScroll();

	useLayoutEffect(() => {
		timeline.current = gsap.timeline();
		const context = gsap.context(() => {
			setTl(timeline.current);
		});

		return () => context.revert();
	}, []);

	useFrame(() => {
		if (timeline.current) {
			timeline.current.seek(scroll.offset * timeline.current.duration());
		}
	});

	return (
		<>
			<Perf />
			<Effects />
			<Color tl={tl} />
			<InstancedParticles />
			<NoiseInstances />
			<InstancedParticles rotation={[Math.PI, 0, 0]} />

			<Environment preset="night" />

			<Camera tl={tl} />
			<Masks />
		</>
	);
}
