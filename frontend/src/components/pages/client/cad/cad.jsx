import react from "react";
import { useEffect } from "react";
import * as THREE from "three";
import { CubeTexture } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";
import cadCore from "./Interface/script";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import "./cad.scss";

export default function Cad() {
	useEffect(() => {
		cadCore();
	}, []);
	return (
		<div className="cadContainer">
			<canvas id="canva"></canvas>
			<div id="prompt">
				<h1 id="status"></h1>
			</div>
			<div id="axisGuide">
				<h1 id="x">x</h1>
				<h1 id="y">y</h1>
				<h1 id="z">z</h1>
			</div>{" "}
			<div id="ops">
				<button id="slice">Slice </button>
				<button id="measure">Measure</button>
				<button id="computeCylinder">Cylinder</button>
				<button id="engrave">Engrave</button>
			</div>
		</div>
	);
}
