/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/marys_hug.glb --transform --simplify
Author: Erika Moya (https://sketchfab.com/opponent019)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/marys-hug-a2809e4985dc475eab0016479a2d577c
Title: Mary's hug
*/

import React, { useLayoutEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Color } from "three";
import { useFrame } from "@react-three/fiber";
export function MarysHug(props) {
	const { tl, ...otherProps } = props;
	const ref = useRef();
	const man = useRef();
	const { nodes, materials } = useGLTF("/marys_hug-transformed.glb");

	useLayoutEffect(() => {
		const children = ref.current.children[0].children[0].children;
		// if (children) {
		// 	children.forEach((child) => {
		// 		child.material.emissive = new Color(2, 0, 0);
		// 		console.log(child.material.emissive);
		// 		if (tl) {
		// 			tl.to(
		// 				child.material.emissive,
		// 				{
		// 					r: 0,
		// 					g: 0,
		// 					b: 0,
		// 					duration: 1,
		// 				},
		// 				2,
		// 			);
		// 		}
		// 	});
		// }

		Object.values(materials).forEach((material) => {
			material.envMapIntensity = 0.4;
			material.emissive = new Color(3, 3, 3);
			material.opacity = 0;
			material.transparent = true;

			if (tl) {
				tl.to(
					material.emissive,
					{
						r: 0,
						g: 0,
						b: 0,
						duration: 1,
						ease: "power3.inOut",
					},
					2,
				);

				tl.to(
					material,
					{
						opacity: 1,
						duration: 1,
						ease: "power3.inOut",
					},
					2,
				);

				tl.to(
					ref.current.rotation,
					{
						y: Math.PI * 2,
						duration: 4,
						ease: "power3.out",
					},
					3,
				);

				tl.to(
					material.emissive,
					{
						r: 3,
						g: 3,
						b: 3,
						duration: 1,
						ease: "power3.inOut",
					},
					3,
				);

				tl.to(
					ref.current.position,
					{
						y: 4,
						duration: 3,
						ease: "power3.out",
					},
					3,
				);
			}
		});
	}, [tl]);

	return (
		<group {...otherProps} ref={ref} dispose={null}>
			<group rotation={[-Math.PI / 2, 0, 0]}>
				<group rotation={[Math.PI / 2, 0, 0]}>
					<mesh
						geometry={nodes.Tallo017_Flower_pink_0.geometry}
						material={materials.Flower_pink}
						position={[-191.57, 36.92, -36.7]}
						rotation={[-2.42, -0.24, -1.65]}
						scale={[81.1, 72.62, 69]}
					/>
					<mesh
						geometry={nodes.Tallo016_Flower_pink_0.geometry}
						material={materials.Flower_pink}
						position={[-104.24, 29.19, -109.13]}
						rotation={[1.62, 0.35, -0.68]}
						scale={[71.36, 79.3, 60.72]}
					/>
					<mesh
						geometry={nodes.Tallo015_Flower_pink_0.geometry}
						material={materials.Flower_pink}
						position={[-191.57, 36.92, -36.7]}
						rotation={[1.22, 0.26, 0.31]}
						scale={[71.36, 69.27, 60.72]}
					/>
					<mesh
						geometry={nodes.Tallo014_Flower_pink_0.geometry}
						material={materials.Flower_pink}
						position={[113.59, 29.19, -115.5]}
						rotation={[-1.43, 0.16, 1.62]}
						scale={[100, 86.15, 85.08]}
					/>
					<mesh
						geometry={nodes.Tallo013_Flower_pink_0.geometry}
						material={materials.Flower_pink}
						position={[14.84, 36.92, -129.44]}
						rotation={[-1.78, -0.12, -1.89]}
						scale={[100, 86.15, 85.08]}
					/>
					<mesh
						geometry={nodes.Tallo012_Flower_pink_0.geometry}
						material={materials.Flower_pink}
						position={[-216.27, 28.12, 51.52]}
						rotation={[1.77, 0.21, -1.16]}
						scale={[71.36, 104.19, 60.72]}
					/>
					<mesh
						geometry={nodes.Tallo011_Flower_pink_0.geometry}
						material={materials.Flower_pink}
						position={[-206.82, 36.92, 161.79]}
						rotation={[-1.46, -0.19, -1.14]}
						scale={[71.36, 70.57, 60.72]}
					/>
					<mesh
						geometry={nodes.Tallo010_Flower_pink_0.geometry}
						material={materials.Flower_pink}
						position={[180.68, 87.71, 163.31]}
						rotation={[1.09, -0.54, 1.62]}
						scale={[59.55, 96.74, 50.67]}
					/>
					<mesh
						geometry={nodes.Tallo009_Flower_pink_0.geometry}
						material={materials.Flower_pink}
						position={[195.92, 36.92, -55.46]}
						rotation={[2.03, -0.87, 0.83]}
						scale={[100, 86.15, 85.08]}
					/>
					<mesh
						geometry={nodes.Tallo008_Flower_pink_0.geometry}
						material={materials.Flower_pink}
						position={[-108.96, 29.19, 213.38]}
						rotation={[-1.42, 0.12, -0.24]}
						scale={[63.75, 100.23, 63.75]}
					/>
					<mesh
						geometry={nodes.Tallo007_Flower_pink_0.geometry}
						material={materials.Flower_pink}
						position={[-173.58, 36.92, 268.95]}
						rotation={[-1.3, -0.13, -1.04]}
						scale={[63.75, 61.94, 63.75]}
					/>
					<mesh
						geometry={nodes.Tallo006_Flower_pink_0.geometry}
						material={materials.Flower_pink}
						position={[282.42, 36.92, 30.15]}
						rotation={[1.28, -0.28, 1.27]}
						scale={[100, 51.04, 85.08]}
					/>
					<mesh
						geometry={nodes.Tallo005_Flower_pink_0.geometry}
						material={materials.Flower_pink}
						position={[293.15, 36.92, 132.12]}
						rotation={[2.55, -0.22, 1.61]}
						scale={[100, 89.07, 85.08]}
					/>
					<mesh
						geometry={nodes.Tallo004_Flower_pink_0.geometry}
						material={materials.Flower_pink}
						position={[256.53, 29.19, 245.38]}
						rotation={[1.51, -0.3, 2.78]}
						scale={[95.35, 80.38, 84.09]}
					/>
					<mesh
						geometry={nodes.Tallo003_Flower_pink_0.geometry}
						material={materials.Flower_pink}
						position={[200.48, 36.92, 322.59]}
						rotation={[1.35, -0.24, 1.79]}
						scale={[59.55, 96.74, 50.67]}
					/>
					<mesh
						geometry={nodes.Tallo002_Flower_pink_0.geometry}
						material={materials.Flower_pink}
						position={[127.76, 29.19, 395.74]}
						rotation={[1.81, -0.21, -2.87]}
						scale={[100, 84.83, 85.08]}
					/>
					<mesh
						geometry={nodes.Tallo001_Flower_pink_0.geometry}
						material={materials.Flower_pink}
						position={[28.54, 36.92, 422.28]}
						rotation={[-2.54, -0.93, -1.22]}
						scale={[100, 100, 85.08]}
					/>
					<mesh
						geometry={nodes.Tallo_Flower_pink_0.geometry}
						material={materials.Flower_pink}
						position={[-71.02, 36.92, 331.97]}
						rotation={[-1.43, 0, -0.04]}
						scale={100}
					/>
					<mesh
						geometry={
							nodes.Flower_yellow035_Flower_yellow_0.geometry
						}
						material={materials.Flower_yellow}
						position={[-15, 82.74, 201.55]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={269.2}
					/>
					<mesh
						geometry={
							nodes.Flower_yellow034_Flower_yellow_0.geometry
						}
						material={materials.Flower_yellow}
						position={[-173.58, 36.92, 268.95]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={269.2}
					/>
					<mesh
						geometry={nodes.Flower_pink030_Flower_pink_0.geometry}
						material={materials.Flower_pink}
						position={[-216.27, 28.12, 51.52]}
						rotation={[-Math.PI / 2, 0, 1.23]}
						scale={268.57}
					/>
					<mesh
						geometry={nodes.Flower_pink029_Flower_pink_0.geometry}
						material={materials.Flower_pink}
						position={[69.85, 87.71, 306.22]}
						rotation={[-0.59, 0.53, -1.36]}
						scale={268.57}
					/>
					<mesh
						geometry={nodes.Flower_pink028_Flower_pink_0.geometry}
						material={materials.Flower_pink}
						position={[180.68, 87.71, 163.31]}
						rotation={[-2.68, 0.74, 1.01]}
						scale={268.57}
					/>
					<mesh
						geometry={nodes.Flower_pink027_Flower_pink_0.geometry}
						material={materials.Flower_pink}
						position={[256.53, 29.19, 245.38]}
						rotation={[-0.55, 0.79, -0.11]}
						scale={268.57}
					/>
					<mesh
						geometry={
							nodes.Flower_yellow033_Flower_yellow_0.geometry
						}
						material={materials.Flower_yellow}
						position={[282.42, 36.92, 30.15]}
						rotation={[-1.01, 1.05, -1.07]}
						scale={269.2}
					/>
					<mesh
						geometry={
							nodes.Flower_yellow032_Flower_yellow_0.geometry
						}
						material={materials.Flower_yellow}
						position={[14.84, 36.92, -129.44]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={269.2}
					/>
					<mesh
						geometry={
							nodes.Flower_yellow031_Flower_yellow_0.geometry
						}
						material={materials.Flower_yellow}
						position={[-191.57, 36.92, -36.7]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={269.2}
					/>
					<mesh
						geometry={
							nodes.Flower_yellow030_Flower_yellow_0.geometry
						}
						material={materials.Flower_yellow}
						position={[-71.02, 36.92, 331.97]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={269.2}
					/>
					<mesh
						geometry={
							nodes.Flower_yellow029_Flower_yellow_0.geometry
						}
						material={materials.Flower_yellow}
						position={[-206.82, 36.92, 161.79]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={269.2}
					/>
					<mesh
						geometry={
							nodes.Flower_yellow028_Flower_yellow_0.geometry
						}
						material={materials.Flower_yellow}
						position={[200.48, 36.92, 322.59]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={269.2}
					/>
					<mesh
						geometry={
							nodes.Flower_yellow027_Flower_yellow_0.geometry
						}
						material={materials.Flower_yellow}
						position={[293.15, 36.92, 132.12]}
						rotation={[-0.55, 0.63, -1.78]}
						scale={269.2}
					/>
					<mesh
						geometry={
							nodes.Flower_yellow026_Flower_yellow_0.geometry
						}
						material={materials.Flower_yellow}
						position={[28.54, 36.92, 422.28]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={269.2}
					/>
					<mesh
						geometry={
							nodes.Flower_yellow025_Flower_yellow_0.geometry
						}
						material={materials.Flower_yellow}
						position={[100.9, 36.92, 198.5]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={269.2}
					/>
					<mesh
						geometry={
							nodes.Flower_yellow024_Flower_yellow_0.geometry
						}
						material={materials.Flower_yellow}
						position={[195.92, 36.92, -55.46]}
						rotation={[-2.23, -0.23, 1.28]}
						scale={269.2}
					/>
					<mesh
						geometry={nodes.Flower_pink026_Flower_pink_0.geometry}
						material={materials.Flower_pink}
						position={[113.59, 29.19, -115.5]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={268.57}
					/>
					<mesh
						geometry={nodes.Flower_pink025_Flower_pink_0.geometry}
						material={materials.Flower_pink}
						position={[212.87, 29.19, 57.26]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={268.57}
					/>
					<mesh
						geometry={nodes.Flower_pink024_Flower_pink_0.geometry}
						material={materials.Flower_pink}
						position={[127.76, 29.19, 395.74]}
						rotation={[-Math.PI / 2, 0, -2]}
						scale={268.57}
					/>
					<mesh
						geometry={nodes.Flower_pink023_Flower_pink_0.geometry}
						material={materials.Flower_pink}
						position={[-104.24, 29.19, -109.13]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={268.57}
					/>
					<mesh
						geometry={nodes.Flower_pink022_Flower_pink_0.geometry}
						material={materials.Flower_pink}
						position={[-108.96, 29.19, 213.38]}
						rotation={[-Math.PI / 2, 0, 2.08]}
						scale={268.57}
					/>
					<mesh
						geometry={nodes.Plane_Floor_0.geometry}
						material={materials.Floor}
						position={[48.44, 0, 118.92]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={100}
					/>
					<mesh
						geometry={nodes.Skull013_Mary_mt_0.geometry}
						material={materials.Mary_mt}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={100}
					/>
					<mesh
						geometry={nodes.Skull012_Mary_mt_0.geometry}
						material={materials.Mary_mt}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={100}
					/>
					<mesh
						geometry={nodes.Skull011_Mary_mt_0.geometry}
						material={materials.Mary_mt}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={100}
					/>
					<mesh
						geometry={nodes.Dress003_Mary_mt001_0.geometry}
						material={materials["Mary_mt.001"]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={100}
					/>

					<mesh
						geometry={nodes.Outer_cape004_Mary_mt001_0.geometry}
						material={materials["Mary_mt.001"]}
						position={[-10.78, 71.56, 27.41]}
						rotation={[-Math.PI / 2, 0, -0.19]}
						scale={100}
					/>

					<mesh
						ref={man}
						geometry={nodes.Man_Mesh000_Man_mt001_0.geometry}
						material={materials["Man_mt.001"]}
						scale={100}
					/>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("/marys_hug-transformed.glb");
