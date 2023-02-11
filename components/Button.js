import { Html } from "@react-three/drei";
import { useState } from "react";

export default function Button({ setMaterial, material }) {
	const [hidden, set] = useState();
	return (
		<mesh position={[0, -2, 0]}>
			<Html
				occlude
				onOcclude={set}
				style={{
					transition: "all 0.5s",
					opacity: hidden ? 0 : 1,
					transform: `scale(${hidden ? 0.5 : 1})`,
				}}
				transform
			>
				<div style={{ textAlign: "center", color: "white" }}>
					Scroll to spin
				</div>
			</Html>
		</mesh>
	);
}
