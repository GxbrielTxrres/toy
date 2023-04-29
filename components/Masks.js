import MaskedContent from "./MaskedContent";

import { Mask, Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { generateUUID } from "three/src/math/MathUtils";

export default function Masks({ scales }) {
	const geometryArray = [
		<boxGeometry key={0} args={[1, 1, 1]} />,
		<sphereGeometry key={1} args={[0.5]} />,
		<torusKnotGeometry key={2} />,
	];

	const contentData = [
		{
			id: 1,
			geometry: geometryArray[0],
			key: generateUUID(),
		},
		{
			id: 2,
			geometry: geometryArray[1],
			key: generateUUID(),
		},
		{
			id: 3,
			geometry: geometryArray[2],
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
						position={[index * 2, 0, 0]}
					>
						<planeGeometry args={[2, 2]} />
					</Mask>
				);
			})}

			{contentData.map((data, index) => {
				return (
					<MaskedContent
						key={data.key}
						id={data.id}
						geometry={data.geometry}
						position-z={0}
						bgPosition={-2}
					/>
				);
			})}
		</Center>
	);
}
