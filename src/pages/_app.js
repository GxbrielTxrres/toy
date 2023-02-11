import "@/styles/globals.css";
import { styles } from "lib/styles";

import { Canvas } from "@react-three/fiber";
import { ScrollControls, Center, Environment } from "@react-three/drei";
import Experience from "components/Experience";
import { Perf } from "r3f-perf";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Canvas style={{ ...styles }}>
				<Perf />
				<Environment preset="night" background blur />
				<ScrollControls pages={3}>
					<Experience />
				</ScrollControls>
			</Canvas>
			<Component {...pageProps} />
		</>
	);
}
