import "@/styles/globals.css";
import { styles } from "lib/styles";

import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";

import Experience from "components/Experience";
export default function App({ Component, pageProps }) {
	return (
		<>
			<Canvas
				style={{ ...styles }}
				gl={{ antialias: false }}
				camera={{ fov: 100 }}
			>
				<ScrollControls pages={3}>
					<Experience />
				</ScrollControls>
			</Canvas>
			<Component {...pageProps} />
		</>
	);
}
