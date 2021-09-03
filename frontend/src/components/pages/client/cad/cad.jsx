import react from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitalControls } from "drei";
function Box() {
	return (
		<mesh>
			<boxBufferGeometry attach="geometry" />
			<meshLambertMaterial attach="material" color="pink" />
		</mesh>
	);
}
export default function Cad() {
	return (
		<div className="cadContainer">
			<Canvas>
				<Box />
				<ambientLight intensity={1} />
			</Canvas>
		</div>
	);
}
