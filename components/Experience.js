import { Environment, useTexture } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Model } from "./Chromatic_core";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { PlasmaModel } from "./Chromatic_plasma";
import Background from "./Background";

export default function Experience() {
	const [texture1, texture2, texture3, texture4] = useTexture([
		"./first.png",
		"./second.png",
		"left.png",
		"right.png",
	]);

	return (
		<>
			<Perf />
			<color args={["#000000"]} attach={"background"} />
			<Environment preset="night" />
			<Background
				textureOne={texture3}
				textureTwo={texture4}
				scale={[3, 5, 1]}
				position-x={3.5}
				rgbOffset={0.025}
			/>
			<Background
				textureOne={texture1}
				textureTwo={texture2}
				scale={[3, 5, 1]}
				rgbOffset={0.02}
			/>

			<Background
				textureOne={texture1}
				textureTwo={texture2}
				scale={[3, 5, 1]}
				position-x={-3.5}
				rgbOffset={0.035}
			/>

			{/* <OrbitControls /> */}
			{/* <Model position-y={-3} /> */}
			{/* <PlasmaModel /> */}

			<EffectComposer multisampling={0}>
				<Bloom
					blendFunction={BlendFunction.ADD}
					mipmapBlur
					luminanceThreshold={0}
					luminanceSmoothing={0}
					levels={5}
					radius={0.6}
				/>
			</EffectComposer>
		</>
	);
}
