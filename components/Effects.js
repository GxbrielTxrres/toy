import { Bloom, EffectComposer, SSR } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
export default function Effects() {
	return (
		<>
			<EffectComposer multisampling={2}>
				<Bloom
					blendFunction={BlendFunction.ADD}
					mipmapBlur
					luminanceThreshold={0}
					luminanceSmoothing={0}
					levels={5}
					radius={0.7}
				/>
			</EffectComposer>
		</>
	);
}
