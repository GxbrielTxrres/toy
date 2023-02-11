import { MeshTransmissionMaterial } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
export default function PhysicsBall({ color, position }) {
	return (
		<RigidBody restitution={1} friction={2} colliders="ball">
			<mesh scale={0.2} position={position}>
				<sphereGeometry />
				<MeshTransmissionMaterial args={[1, false]} color={color} />
			</mesh>
		</RigidBody>
	);
}
