import {
	Environment,
	useTexture,
	OrbitControls,
	useMask,
	Mask,
} from "@react-three/drei";
import { Perf } from "r3f-perf";

import Effects from "./Effects";

import { useRef } from "react";
import MaskedContent from "./MaskedContent";

export default function Experience() {
	const geometryArray = [
		<boxGeometry />,
		<sphereGeometry />,
		<torusKnotGeometry />,
	];

	const positions = [-2, -10, -25];

	return (
		<>
			<Perf />

			<Effects />
			<color args={["#000000"]} attach={"background"} />
			<Environment preset="night" background blur />

			{[...Array(3)].map((value, index) => {
				return (
					<Mask
						id={index + 1}
						key={index}
						colorWrite
						position={[0, index, index * -2]}
					>
						<circleGeometry />
					</Mask>
				);
			})}

			{[...Array(3)].map((value, index) => {
				return (
					<MaskedContent
						key={index}
						id={index + 1}
						geometry={geometryArray[index]}
						bgPosition={positions[index]}
						position={[0, 0, index * -10]}
					/>
				);
			})}

			<OrbitControls />
		</>
	);
}
