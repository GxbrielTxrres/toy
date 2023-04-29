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
import { generateUUID } from "three/src/math/MathUtils";
import Background from "./Background";

export default function Experience() {
	const ref = useRef();

	const geometryArray = [
		<boxGeometry />,
		<sphereGeometry />,
		<torusKnotGeometry />,
	];

	const positions = [-2, -10, -25];

	const contentData = [
		{
			id: 1,
			geometry: geometryArray[0],
			positionZ: positions[0],
			key: generateUUID(),
		},
		{
			id: 2,
			geometry: geometryArray[1],
			positionZ: positions[1],
			key: generateUUID(),
		},
		{
			id: 3,
			geometry: geometryArray[2],
			positionZ: positions[2],
			key: generateUUID(),
		},
	];

	const maskedData = [
		{ id: 1, position: [0, 1, -2], key: generateUUID() },
		{ id: 2, position: [0, 2, -4], key: generateUUID() },
		{ id: 3, position: [0, 3, -6], key: generateUUID() },
	];

	return (
		<>
			<Perf />

			<Effects />
			<color args={["#000000"]} attach={"background"} />
			<Environment preset="night" background blur />
			{maskedData.map((data, index) => {
				return (
					<Mask
						id={data.id}
						key={data.key}
						colorWrite
						position={[0, index, index * -2]}
					>
						<circleGeometry />
					</Mask>
				);
			})}

			{contentData.map((data, index) => {
				return (
					<MaskedContent
						key={data.key}
						id={data.id}
						geometry={data.geometry}
						bgPosition={data.positionZ}
						position={[0, 0, index * -10]}
					/>
				);
			})}
			<OrbitControls />
		</>
	);
}
