import { useThree, extend, useFrame, useScroll } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
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
	const { stencil, width, height, ...otherProps } = props;

	const ref = useRef();

	useFrame(({ clock, camera }) => {
		ref.current.material.uniforms.u_Timee.value = clock.elapsedTime;

		ref.current.material.uniforms.uResolution.value = new Vector2(
			window.innerWidth,
			window.innerHeight,
		);
	});

	return (
		<mesh {...otherProps} ref={ref} scale={[width, height, 1]}>
			<planeGeometry />
			<backgroundMaterial {...stencil} u_Timee={0} />
		</mesh>
	);
}
