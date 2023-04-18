import "@/styles/globals.css";
import { styles } from "lib/styles";

import { Canvas } from "@react-three/fiber";
import { ScrollControls, Center, Environment } from "@react-three/drei";

import { Physics } from "@react-three/rapier";
import PhysicsDonut from "../../components/PhysicsDonut";
import Experience from "components/Experience";
export default function App({ Component, pageProps }) {
	return (
		<>
			<Canvas style={{ ...styles }}>
				<ScrollControls pages={3}>
					<Experience />
				</ScrollControls>
			</Canvas>
			<Component {...pageProps} />
		</>
	);
}
