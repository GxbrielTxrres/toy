import { useMask } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { MathUtils } from "three";
import Background from "./Background";

export default function MaskedContent({
	id,
	geometry,
	bgPosition,
	bgPositionY,
	width,
	height,
	...otherProps
}) {
	const stencil = useMask(id);
	const ref = useRef();

	useFrame(({ camera, clock }) => {
		ref.current.position.x = MathUtils.lerp(
			ref.current.position.x,
			camera.position.x,
			0.05,
		);

		ref.current.position.y = MathUtils.lerp(
			ref.current.position.y,
			camera.position.y,
			0.05,
		);

		ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.25) * 2;
		ref.current.rotation.y = Math.cos(clock.elapsedTime * 0.25) * 2;
	});

	return (
		<group>
			<mesh ref={ref} {...otherProps}>
				{geometry}
				<meshStandardMaterial {...stencil} />
			</mesh>
			<Background
				height={height}
				width={width}
				position-z={bgPosition}
				stencil={stencil}
			/>
		</group>
	);
}
