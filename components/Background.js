import { useThree, extend, useFrame } from "@react-three/fiber";
import { shaderMaterial, useScroll, useTexture } from "@react-three/drei";
import { vertexShader } from "lib/vertexShader";
import { fragmentShader } from "lib/fragmentShader";
import { Color, MathUtils, Vector2 } from "three";
import {
	useRef,
	useState,
	useCallback,
	useEffect,
	useLayoutEffect,
} from "react";
import { useControls } from "leva";
import gsap from "gsap";
const BackgroundMaterial = shaderMaterial(
	{
		u_Timee: 0,
		uTextureOne: undefined,
		uTextureTwo: undefined,
		uMixThreshold: new Vector2(0.0, 0.0),
		uScrollMix: new Vector2(0.0, 0.0),
		uScalar: undefined,
		uProgress: 0,
	},
	vertexShader,
	fragmentShader,
);

extend({ BackgroundMaterial });

export default function Background(props) {
	const { textureOne, textureTwo, rgbOffset, ...otherProps } = props;

	const ref = useRef();
	const scroll = useScroll();
	const scrollTimeline = useRef();

	const { width, height } = useThree((state) => state.viewport);

	useLayoutEffect(() => {
		scrollTimeline.current = gsap.timeline();

		scrollTimeline.current.to(
			ref.current.material.uniforms.uProgress,
			{
				value: 1,
				duration: 1,
			},
			0,
		);

		scrollTimeline.current.to(
			ref.current.material.uniforms.uMixThreshold.value,
			{
				x: rgbOffset,
				duration: 1,
			},
			0,
		);

		scrollTimeline.current.to(
			ref.current.material.uniforms.uProgress,
			{
				value: 0,
				duration: 1,
			},
			1,
		);

		scrollTimeline.current.to(
			ref.current.material.uniforms.uMixThreshold.value,
			{
				x: 0,
				duration: 1,
			},
			1,
		);
	}, []);

	const oscillationFrequency = 0.25;
	const oscillationAmplitudeX = 0.5;

	const { scalar } = useControls("Shader", {
		scalar: { value: 45.0, min: 0, max: 150, step: 0.01 },
	});

	useFrame((state) => {
		const time = state.clock.elapsedTime;
		// Use sine wave functions to oscillate the mixThreshold vector between two values
		const mixThreshold =
			oscillationAmplitudeX *
			Math.abs(Math.sin(oscillationFrequency * scroll.offset * 0.1));

		if (scrollTimeline.current) {
			scrollTimeline.current.seek(
				scroll.offset * scrollTimeline.current.duration(),
			);
		}

		ref.current.material.uniforms.u_Timee.value = time * 0.25;

		ref.current.material.uniforms.uScrollMix.value.set(
			mixThreshold,
			mixThreshold,
		);
	});

	return (
		<mesh {...otherProps} ref={ref}>
			<planeGeometry args={[1, 1, 16, 16]} />
			<backgroundMaterial
				u_Timee={0}
				uTextureOne={textureOne}
				uTextureTwo={textureTwo}
				uScalar={scalar}
			/>
		</mesh>
	);
}
