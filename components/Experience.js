import { Environment } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import PhysicsDonut from "./PhysicsDonut";
import { Perf } from "r3f-perf";

export default function Experience() {
	return (
		<>
			<Perf />
			<Environment preset="night" background blur />
			<Physics gravity={[0, -9.82, 0]}>
				<PhysicsDonut />
			</Physics>
		</>
	);
}
