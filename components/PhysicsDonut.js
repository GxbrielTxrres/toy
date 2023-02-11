import {
	MeshTransmissionMaterial,
	Sparkles,
	useScroll,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import PhysicsBall from "./PhysicsBall";
import { useRef, useState } from "react";
import * as THREE from "three";
export default function PhysicsDonut({ material }) {
	const ref = useRef();
	const rigidBody = useRef();
	const sparkles = useRef();
	const scroll = useScroll();

	useFrame((state) => {
		const time = state.clock.getElapsedTime();
		const eulerRotation = new THREE.Euler(
			scroll.offset * 5,
			time * 2,
			scroll.offset * 2,
		);
		const quaternionRotation = new THREE.Quaternion();
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
					{material ? (
						<MeshTransmissionMaterial
							color="aqua"
							roughness={0}
							distortion={1}
							sheenColor="#ffffff00"
							sheen={1}
							distortionScale={0.75}
							temporalDistortion={0.2}
							thickness={0.75}
							transmission={1}
							iridescence={2}
						/>
					) : (
						<MeshTransmissionMaterial
							transmission={1}
							chromaticAberration={2}
							distortion={1}
							temporalDistortion={0.2}
							distortionScale={0.4}
							thickness={0.2}
						/>
					)}
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
			<PhysicsBall position={[-0.9, 0.3, 0]} color="red" />
			<PhysicsBall position={[0.9, 0.3, 0]} color="yellow" />
		</group>
	);
}
