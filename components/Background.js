import { useThree, extend, useFrame, useScroll } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import { vertexShader } from "lib/vertexShader";
import { fragmentShader } from "lib/fragmentShader";
import { Vector2 } from "three";
import { useRef, useCallback, useEffect } from "react";

const BackgroundMaterial = shaderMaterial(
	{
		u_Timee: 0,
		uTextureOne: undefined,
		uTextureTwo: undefined,
		uResolution: new Vector2(),
		uMixThreshold: new Vector2(0.1, 0.1),
		uMouse: new Vector2(0, 0),
	},
	vertexShader,
	fragmentShader,
);

extend({ BackgroundMaterial });

export default function Background(props) {
	const { textureOne, textureTwo, rgbOffset, stencil, ...otherProps } = props;

	const ref = useRef();
	const mousePosition = useRef({ x: 0, y: 0 });

	const updateMousePosition = useCallback((e) => {
		mousePosition.current = { x: e.pageX, y: e.pageY };
	}, []);

	useEffect(() => {
		window.addEventListener("mousemove", updateMousePosition, false);

		return () => {
			window.removeEventListener("mousemove", updateMousePosition, false);
		};
	}, [updateMousePosition]);

	useFrame(({ clock, camera }) => {
		ref.current.material.uniforms.u_Timee.value = clock.elapsedTime;
		ref.current.material.uniforms.uMouse.value = new Vector2(
			mousePosition.current.x,
			mousePosition.current.y,
		);
		ref.current.material.uniforms.uResolution.value = new Vector2(
			window.innerWidth,
			window.innerHeight,
		);
	});

	const { width, height } = useThree((state) => state.viewport);

	return (
		<mesh {...otherProps} ref={ref} scale={[width, height, 1]}>
			<planeGeometry args={[1, 1, 16, 16]} />
			<backgroundMaterial
				{...stencil}
				u_Timee={0}
				uTextureOne={textureOne}
				uTextureTwo={textureTwo}
			/>
		</mesh>
	);
}
