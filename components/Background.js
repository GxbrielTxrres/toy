import { useThree, extend, useFrame } from "@react-three/fiber";
import { Html, Text, shaderMaterial, useScroll } from "@react-three/drei";
import { vertexShader } from "lib/vertexShader";
import { fragmentShader } from "lib/fragmentShader";
import { MathUtils, Vector2 } from "three";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const BackgroundMaterial = shaderMaterial(
	{
		u_Timee: 0,
		uTextureOne: undefined,
		uTextureTwo: undefined,
		uMixThreshold: new Vector2(0.0, 0.0),
	},
	vertexShader,
	fragmentShader,
);

extend({ BackgroundMaterial });

export default function Background(props) {
	const { textureOne, textureTwo, rgbOffset, ...otherProps } = props;

	const ref = useRef();
	const scroll = useScroll();
	const scrollTimeline = useRef(false);
	const scrollTl = useRef();

	const { width, height } = useThree((state) => state.viewport);
	const { camera } = useThree();

	const interpolationFactor = 0.01;
	const threshold = 0.0001;

	const [scrollTop, setScrollTop] = useState(0);
	useEffect(() => {
		const handleScroll = (event) => {
			setScrollTop(window.scrollY);
		};
		window.onscroll = () => {
			window.alert("s");
		};

		window.scroll(() => {
			window.alert("s");
		});
	}, []);

	useFrame((state) => {
		const time = state.clock.elapsedTime;
		// Use sine wave functions to oscillate the mixThreshold vector between two values

		if (scrollTl.current) {
			scrollTl.current.seek(scroll.offset * scrollTl.current.duration());
		}
		if (scroll.delta.toFixed(4) > 0.0025) {
			scrollTimeline.current = true;
		} else {
			scrollTimeline.current = false;
		}

		const targetValue = scrollTimeline.current ? rgbOffset * 3 : 0;
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

		ref.current.material.uniforms.u_Timee.value = time * 0.25;
	});

	return (
		<mesh {...otherProps} ref={ref} scale={[width, height, 1]}>
			<Text>{scrollTop}</Text>
			<planeGeometry args={[1, 1, 16, 16]} />
			<backgroundMaterial
				u_Timee={0}
				uTextureOne={textureOne}
				uTextureTwo={textureTwo}
			/>
		</mesh>
	);
}
