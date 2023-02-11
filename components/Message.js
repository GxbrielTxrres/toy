import { Text3D } from "@react-three/drei";
import { forwardRef } from "react";

export const Message = forwardRef(function Message(props, ref) {
	return (
		<group ref={ref}>
			<Text3D
				position={props.position}
				font="./fonts/helvetiker_regular.typeface.json"
			>
				{props.text}
			</Text3D>
		</group>
	);
});
