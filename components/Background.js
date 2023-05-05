import { extend, useFrame, useThree } from "@react-three/fiber";
import { Environment, shaderMaterial } from "@react-three/drei";
import { vertexShader } from "lib/vertexShader";
import { fragmentShader } from "lib/fragmentShader";
import { Vector2 } from "three";
import { useRef } from "react";

const BackgroundMaterial = shaderMaterial(
	{
		u_Timee: 0,
		uResolution: new Vector2(),
	},
	vertexShader,
	fragmentShader,
);

extend({ BackgroundMaterial });

export default function Background(props) {
	const ref = useRef();
	const { width, height } = useThree();

	useFrame(({ clock }) => {
		ref.current.material.uniforms.u_Timee.value = clock.elapsedTime;

		ref.current.material.uniforms.uResolution.value = new Vector2(
			window.innerWidth,
			window.innerHeight,
		);
	});

	return (
		<>
			<Environment files="/evangelion-1-HDR.hdr" background />

			<mesh ref={ref} scale={[width, height, 1]}>
				<planeGeometry />
				<backgroundMaterial u_Timee={0} />
			</mesh>
		</>
	);
}
