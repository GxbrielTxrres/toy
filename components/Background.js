import { useThree, extend, useFrame } from "@react-three/fiber";
import { shaderMaterial, useScroll, useTexture } from "@react-three/drei";
import { vertexShader } from "lib/vertexShader";
import { fragmentShader } from "lib/fragmentShader";
import { Color, MathUtils, Vector2 } from "three";
import { useRef, useState, useCallback, useEffect } from "react";
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

	let threshold;
	let targetValue;
	let interpolationFactor;

	const ref = useRef();
	const scroll = useScroll();
	const scrollingRef = useRef(false);
	const scrollTimeout = useRef(null);

	const handleScroll = () => {
		clearTimeout(scrollTimeout.current);
		scrollingRef.current = true;

		scrollTimeout.current = setTimeout(() => {
			scrollingRef.current = false;
		}, 100);
	};

	const handleTouchStart = () => {
		clearTimeout(scrollTimeout.current);
		scrollingRef.current = true;

		scrollTimeout.current = setTimeout(() => {
			scrollingRef.current = false;
		}, 100);
	};

	// const handleTouchEnd = () => {
	// 	scrollingRef.current = false;
	// };

	useEffect(() => {
		window.addEventListener("wheel", handleScroll);
		window.addEventListener("touchstart", handleTouchStart, {
			passive: true,
		});
		// window.addEventListener("touchend", handleTouchEnd, { passive: true });
		return () => {
			window.removeEventListener("wheel", handleScroll);
			window.removeEventListener("touchstart", handleTouchStart, {
				passive: true,
			});
			// window.removeEventListener("touchend", handleTouchEnd, {
			// 	passive: true,
			// });
		};
	}, []);

	const { width, height } = useThree((state) => state.viewport);

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

		if (window.innerWidth < 500) {
			targetValue = scrollingRef.current ? rgbOffset * 5 : 0;
			interpolationFactor = 0.01;
			threshold = 0.1;
		} else {
			targetValue = scrollingRef.current ? rgbOffset : 0;
			interpolationFactor = 0.025;
			threshold = 0.001;
		}
		if (
			Math.abs(
				ref.current.material.uniforms.uMixThreshold.value.x -
					targetValue,
			) > threshold
		) {
			ref.current.material.uniforms.uMixThreshold.value.x =
				MathUtils.lerp(
					ref.current.material.uniforms.uMixThreshold.value.x,
					targetValue,
					interpolationFactor,
				);
		}

		if (
			Math.abs(
				ref.current.material.uniforms.uMixThreshold.value.y -
					targetValue,
			) > threshold
		) {
			ref.current.material.uniforms.uMixThreshold.value.y =
				MathUtils.lerp(
					ref.current.material.uniforms.uMixThreshold.value.y,
					targetValue,
					interpolationFactor,
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
