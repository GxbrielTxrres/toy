import Camera from "./Camera";
import Color from "./Color";
import Effects from "./Effects";

import { OrbitControls, useScroll } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useLayoutEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import Background from "./Background";
import { Calaveras } from "./Calaveras";
import { Graffiti } from "./Graffiti";
import { Skull } from "./Skull";
import { Map } from "./Map";
import { useControls } from "leva";
import { MarysHug } from "./MarysHug";

export default function Experience() {
	const [tl, setTl] = useState();
	const timeline = useRef();
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

	const { position } = useControls("s", {
		position: {
			value: { x: 0, y: 0, z: 0 },
			min: -10,
			max: 10,
			step: 0.01,
		},
	});

	return (
		<>
			<Perf />
			<Effects />
			<Background />
			{/* <OrbitControls /> */}
			{/* <Map scale={0.005} position={[0, 0, -10]} /> */}
			{/* <Calaveras position={[0, -1, 0]} /> */}
			<Graffiti tl={tl} position={[-8.5, -3.4, -40]} />
			<MarysHug tl={tl} position={[0.1, -2.8, -7.15]} scale={0.0014} />
			<Skull tl={tl} />
			<Color tl={tl} />
			<Camera tl={tl} />
		</>
	);
}
