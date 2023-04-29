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
	const ref = useRef();

	const array = new Array(3)
		.fill(null)
		.map((_, index) => ({ key: index, value: index }));

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

			{array.map((_, index) => {
				return (
					<Mask
						id={index + 1}
						key={_.key}
						colorWrite
						position={[0, index, index * -2]}
					>
						<circleGeometry />
					</Mask>
				);
			})}

			{array.map((_, index) => {
				return (
					<MaskedContent
						key={_.value}
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
