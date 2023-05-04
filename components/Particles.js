import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { InstancedMesh, Matrix4 } from "three";

const InstancedParticles = ({
	count = 50,
	size = 0.1,
	swirlSpeed = 0.8,
	rotation,
	tl,
}) => {
	const meshRef = useRef();
	const dummy = useMemo(() => new Matrix4(), []);

	useFrame((state) => {
		const mesh = meshRef.current;
		const time = state.clock.getElapsedTime();

		for (let i = 0; i < count; i++) {
			const t = (i / count) * Math.PI * 2;
			const r = 5;
			const x = r * Math.cos(t + time * swirlSpeed);
			const y =
				(i / count) * 15 -
				7.5 +
				2 * Math.sin(time * swirlSpeed * 2 + i * 0.1);
			const z = r * Math.sin(t + time * swirlSpeed);

			dummy.makeTranslation(x, y, z);
			mesh.setMatrixAt(i, dummy);
		}
		mesh.instanceMatrix.needsUpdate = true;
	});

	return (
		<group scale={0.2} rotation={rotation} position={[10, 0, 7]}>
			<instancedMesh ref={meshRef} args={[null, null, count]}>
				<sphereGeometry args={[size, 16, 16]} />
				<meshBasicMaterial color="white" />
			</instancedMesh>
		</group>
	);
};

export default InstancedParticles;
