/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/chromatic_plasma.glb --transform --simplify
Author: Tycho Magnetic Anomaly (https://sketchfab.com/Tycho_Magnetic_Anomaly)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/chromatic-plasma-29b63a1a22524baeaec2ef96805e51c3
Title: Chromatic Plasma
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function PlasmaModel(props) {
	const group = useRef();
	const { nodes, materials, animations } = useGLTF(
		"/chromatic_plasma-transformed.glb",
	);

	Object.values(materials).forEach((mat) => {
		mat.toneMapped = false;
		mat.envMapIntensity = 0.4;
		mat.depthTest = true;
	});

	const { ref, actions, names } = useAnimations(animations, group);

	useEffect(() => {
		actions[names[0]].play();
	}, []);
	return (
		<group ref={group} {...props} dispose={null}>
			<group name="Sketchfab_Scene">
				<group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
					<group name="root">
						<group
							name="GLTF_SceneRootNode"
							rotation={[Math.PI / 2, 0, 0]}
						>
							<group name="Torus001_1">
								<mesh
									name="Object_4"
									geometry={nodes.Object_4.geometry}
									material={materials.material}
								/>
							</group>
							<group name="Torus002_2">
								<mesh
									name="Object_6"
									geometry={nodes.Object_6.geometry}
									material={materials.material}
								/>
							</group>
							<group name="Torus003_3">
								<mesh
									name="Object_8"
									geometry={nodes.Object_8.geometry}
									material={materials.material}
								/>
							</group>
							<group name="Torus004_4">
								<mesh
									name="Object_10"
									geometry={nodes.Object_10.geometry}
									material={materials.material}
								/>
							</group>
							<group name="Torus005_5">
								<mesh
									name="Object_12"
									geometry={nodes.Object_12.geometry}
									material={materials.material}
								/>
							</group>
							<group name="Torus006_6">
								<mesh
									name="Object_14"
									geometry={nodes.Object_14.geometry}
									material={materials.material}
								/>
							</group>
							<group name="Torus007_7">
								<mesh
									name="Object_16"
									geometry={nodes.Object_16.geometry}
									material={materials.material}
								/>
							</group>
							<group name="Torus008_8">
								<mesh
									name="Object_18"
									geometry={nodes.Object_18.geometry}
									material={materials.material}
								/>
							</group>
							<group name="Torus009_9">
								<mesh
									name="Object_20"
									geometry={nodes.Object_20.geometry}
									material={materials.material}
								/>
							</group>
							<group name="Torus010_10">
								<mesh
									name="Object_22"
									geometry={nodes.Object_22.geometry}
									material={materials.material}
								/>
							</group>
							<group name="Torus011_11">
								<mesh
									name="Object_24"
									geometry={nodes.Object_24.geometry}
									material={materials.material}
								/>
							</group>
							<group name="Torus012_12">
								<mesh
									name="Object_26"
									geometry={nodes.Object_26.geometry}
									material={materials.material}
								/>
							</group>
							<group name="Torus013_13">
								<mesh
									name="Object_28"
									geometry={nodes.Object_28.geometry}
									material={materials.material}
								/>
							</group>
							<group name="Torus014_14">
								<mesh
									name="Object_30"
									geometry={nodes.Object_30.geometry}
									material={materials.material}
								/>
							</group>
							<group name="Torus015_15">
								<mesh
									name="Object_32"
									geometry={nodes.Object_32.geometry}
									material={materials.material}
								/>
							</group>
						</group>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("/chromatic_plasma-transformed.glb");