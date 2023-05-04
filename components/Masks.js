import MaskedContent from "./MaskedContent";

import { Mask, Center } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Color } from "three";
import { generateUUID } from "three/src/math/MathUtils";

export default function Masks() {
	const { width, height } = useThree((state) => state.viewport);
	const ref = useRef([]);
	const geometryArray = [
		<boxGeometry key={0} args={[1, 1, 1]} />,
		<sphereGeometry key={1} args={[0.6]} />,
		<torusGeometry key={2} args={[0.4, 0.15]} />,
	];

	const contentData = [
		{
			id: 1,
			geometry: geometryArray[0],
			height: height,
			width: width,
			key: generateUUID(),
		},
		{
			id: 2,
			geometry: geometryArray[1],
			height: height,
			width: width,
			key: generateUUID(),
		},
		{
			id: 3,
			geometry: geometryArray[2],
			height: height * 2,
			width: width * 2,
			key: generateUUID(),
		},
	];

	const maskedData = [
		{ id: 1, key: generateUUID() },
		{ id: 2, key: generateUUID() },
		{ id: 3, key: generateUUID() },
	];

	return (
		<Center position={[0, 0, 0]}>
			{maskedData.map((data, index) => {
				return (
					<Mask
						id={data.id}
						key={data.key}
						colorWrite
						// depthWrite
						position={[index * 2.5, 0, 0]}
					>
						<planeGeometry args={[2, 2]} />
					</Mask>
				);
			})}

			<Mask id={3} colorWrite depthWrite position-x={6} position-z={-4}>
				<planeGeometry args={[2, 2]} />
			</Mask>

			{contentData.map((data, index) => {
				return (
					<mesh
						ref={(el) => {
							ref.current[index] = el;
						}}
					>
						<MaskedContent
							key={data.key}
							id={data.id}
							geometry={data.geometry}
							position-z={0}
							bgPosition={-2}
							width={data.width}
							height={data.height}
						/>
					</mesh>
				);
			})}
		</Center>
	);
}
