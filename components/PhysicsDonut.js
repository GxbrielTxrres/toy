import {
	MeshTransmissionMaterial,
	Sparkles,
	useScroll,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import * as THREE from "three";
export default function PhysicsDonut() {
	const ref = useRef();
	const rigidBody = useRef();
	const sparkles = useRef();
	const scroll = useScroll();

	const eulerRotation = new THREE.Euler();
	const quaternionRotation = new THREE.Quaternion();

	useFrame(({ clock }) => {
		const time = clock.getElapsedTime();

		eulerRotation.set(scroll.offset * 5, time * 2, scroll.offset * 5);
		quaternionRotation.setFromEuler(eulerRotation);
		rigidBody.current.setNextKinematicRotation(quaternionRotation);

		sparkles.current.scale.x = Math.abs(Math.sin(scroll.offset / 4) * 2);
		sparkles.current.scale.y = Math.abs(Math.sin(scroll.offset / 4) * 2);
		sparkles.current.scale.z = Math.abs(Math.sin(scroll.offset / 4) * 2);
	});

	return (
		<group ref={ref}>
			<RigidBody
				rotation={[-Math.PI / 2, 0, 0]}
				ref={rigidBody}
				colliders="trimesh"
				type="kinematicPosition"
			>
				<mesh rotation={[-Math.PI / 2, 0, 0]}>
					<torusGeometry />

					<MeshTransmissionMaterial
						transmission={1}
						chromaticAberration={2}
						distortion={1}
						temporalDistortion={0.2}
						distortionScale={0.4}
						thickness={0.4}
						envMapIntensity={2}
					/>

					<Sparkles
						ref={sparkles}
						scale={10}
						noise={0}
						speed={0}
						size={2}
					/>
				</mesh>
			</RigidBody>
			<PhysicsBall position={[-0.9, 0.3, 0]} color="blue" />
			<PhysicsBall position={[-0.85, 0.3, 0]} color="red" />
			<PhysicsBall position={[0.9, 0.3, 0]} color="yellow" />
		</group>
	);
}

function PhysicsBall({ color, position }) {
	return (
		<RigidBody restitution={1} friction={2} colliders="ball">
			<mesh scale={0.2} position={position}>
				<sphereGeometry />
				<MeshTransmissionMaterial args={[1, false]} color={color} />
			</mesh>
		</RigidBody>
	);
}
