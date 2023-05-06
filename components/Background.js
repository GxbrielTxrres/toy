import { extend, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, shaderMaterial } from "@react-three/drei";
import { vertexShader } from "lib/vertexShader";
import { fragmentShader } from "lib/fragmentShader";
import { Color, Vector2 } from "three";
import { useEffect, useLayoutEffect, useRef } from "react";
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
	const { tl, width, height, envMapVisible, ...otherProps } = props;
	const { camera } = useThree();
	const bigLight = useRef();
	const ref = useRef();
	const color = new Color();

	useLayoutEffect(() => {
		if (tl) {
			tl.to(
				bigLight.current.material.color,
				{
					r: 3,
					g: 1,
					b: 0,
					duration: 1,
					ease: "power3.inOut",
				},
				2,
			);

			tl.to(
				bigLight.current.position,
				{
					z: 1,
					duration: 1,
					ease: "power3.inOut",
				},
				3,
			);
		}
	}, [tl]);

	useFrame(({ clock }) => {
		if (ref.current) {
			ref.current.material.uniforms.u_Timee.value = clock.elapsedTime;

			ref.current.material.uniforms.uResolution.value = new Vector2(
				window.innerWidth,
				window.innerHeight,
			);
		}
	});

	return (
		<>
			<Environment
				frames={Infinity}
				files="/evangelion-1-HDR.hdr"
				background
			>
				<Lightformer
					ref={bigLight}
					scale={[5, 5]}
					form="rect"
					color={new Color(0, 5, 0)}
					intensity={2}
					position={[0, 0, 10]}
				/>

				<Lightformer
					scale={[4, 4]}
					form="circle"
					color={new Color(3, 0.1, 0)}
					intensity={2}
					position={[5, 0, 0]}
					target={[0, 0, 0]}
				/>
				<Lightformer
					scale={[4, 4]}
					form="rect"
					color={new Color(3, 3, 0)}
					intensity={2}
					position={[1, 5, 1]}
					target={[0, 0, 0]}
				/>
			</Environment>

			<mesh ref={ref} scale={[width, height, 1]}>
				<planeGeometry />
				<backgroundMaterial u_Timee={0} />
			</mesh>
		</>
	);
}
