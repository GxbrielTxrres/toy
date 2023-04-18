import { Environment } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import PhysicsDonut from "./PhysicsDonut";

export default function Experience() {
	return (
		<>
			<Environment preset="night" background blur />
			<Physics gravity={[0, -9.82, 0]}>
				<PhysicsDonut />
			</Physics>
		</>
	);
}
