import { Center, OrbitControls, ScrollControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import Button from "./Button";
import PhysicsDonut from "./PhysicsDonut";
import { useState } from "react";

export default function Experience() {
	const [material, setMaterial] = useState(false);

	return (
		<>
			<OrbitControls
				makeDefault
				enablePan={false}
				enableRotate={false}
				enableZoom={false}
			/>
			<Center>
				<Button />
				<group scale={1.5}>
					{/* <Message position={[0, 0, 0]} text="Let" />
		<Message position={[0, -1.5, 0]} text="Go" /> */}
					<Physics gravity={[0, -9.82, 0]}>
						<PhysicsDonut material={material} />
					</Physics>
				</group>
			</Center>
		</>
	);
}
