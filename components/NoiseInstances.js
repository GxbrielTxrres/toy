import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { InstancedMesh, Matrix4 } from "three";

// Custom Perlin noise function
function perlinNoise(x, y) {
	const p = new Uint8Array(512);
	const permutation = new Uint8Array(256);
	for (let i = 0; i < 256; i++) permutation[i] = i;
	for (let i = 255; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[permutation[i], permutation[j]] = [permutation[j], permutation[i]];
	}
	p.set(permutation, 0);
	p.set(permutation, 256);

	function fade(t) {
		return t * t * t * (t * (t * 6 - 15) + 10);
	}

	function lerp(t, a, b) {
		return a + t * (b - a);
	}

	function grad(hash, x, y) {
		const h = hash & 3;
		const u = h < 2 ? x : y;
		const v = h < 2 ? y : x;
		return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? 2 * v : -2 * v);
	}

	const X = Math.floor(x) & 255;
	const Y = Math.floor(y) & 255;

	x -= Math.floor(x);
	y -= Math.floor(y);

	const u = fade(x);
	const v = fade(y);

	const A = p[X] + Y;
	const B = p[X + 1] + Y;

	return lerp(
		v,
		lerp(u, grad(p[A], x, y), grad(p[B], x - 1, y)),
		lerp(u, grad(p[A + 1], x, y - 1), grad(p[B + 1], x - 1, y - 1)),
	);
}

const NoiseInstances = ({ count = 100, size = 0.1, swirlSpeed = 0.001 }) => {
	const meshRef = useRef();
	const dummy = useMemo(() => new Matrix4(), []);

	useFrame((state) => {
		const mesh = meshRef.current;
		const time = state.clock.getElapsedTime();

		for (let i = 0; i < count; i++) {
			const t = (i / count) * Math.PI * 2;
			const r =
				5 +
				2 * perlinNoise(i + time * swirlSpeed, i + time * swirlSpeed);
			const x = r * Math.cos(t);
			const y =
				2 *
				perlinNoise(
					i + time * swirlSpeed * 1.5,
					i + time * swirlSpeed * 1.5,
				);
			const z = r * Math.sin(t);

			dummy.makeTranslation(x, y, z);
			mesh.setMatrixAt(i, dummy);
		}
		mesh.instanceMatrix.needsUpdate = true;
	});

	return (
		<group scale={2}>
			<instancedMesh ref={meshRef} args={[null, null, count]}>
				<sphereGeometry args={[size, 16, 16]} />
				<meshBasicMaterial color="white" />
			</instancedMesh>
		</group>
	);
};

export default NoiseInstances;
