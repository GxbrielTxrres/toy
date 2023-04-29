import { useMask, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Color, MathUtils } from "three";
import Background from "./Background";

export default function MaskedContent({
	id,
	geometry,
	bgPosition,
	...otherProps
}) {
	const stencil = useMask(id);

	const ref = useRef();

	useFrame(({ camera }) => {
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
	});
	return (
		<group>
			<mesh ref={ref} {...otherProps}>
				{geometry}
				<meshStandardMaterial {...stencil} />
			</mesh>
			<Background position-z={bgPosition} stencil={stencil} />
		</group>
	);
}