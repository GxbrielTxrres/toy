import "@/styles/globals.css";
import { styles } from "lib/styles";

import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";

import Experience from "components/Experience";
export default function App({ Component, pageProps }) {
	return (
		<>
			<Canvas style={{ ...styles }} gl={{ antialias: false }}>
				<ScrollControls pages={2}>
					<Experience />
				</ScrollControls>
			</Canvas>
			<Component {...pageProps} />
		</>
	);
}
