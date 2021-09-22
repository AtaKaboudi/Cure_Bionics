import react from "react";
import { useEffect } from "react";
import * as THREE from "three";
import { CubeTexture } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";
import cadCore from "./Interface/script";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import "./cad.scss";

export default function Cad(props) {
	useEffect(() => {
		cadCore();
		window.scrollTo(300, 2500);
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
				<div id="sliceParams">
					<label>UpperPlane</label>
					<span id="upperPlaneUp" class="material-icons">
						expand_less
					</span>
					<span id="upperPlaneDown" class="material-icons">
						expand_more
					</span>
					<label>LowerPlane</label>
					<span id="lowerPlaneUp" class="material-icons">
						expand_less
					</span>
					<span id="lowerPlaneDown" class="material-icons">
						expand_more
					</span>
				</div>
				<button id="confirmSlice">confirm Slice </button>

				<button id="measure">Measure</button>
				<button id="computeCylinder">Cylinder</button>
				<button id="engrave">Engrave</button>
			</div>
		</div>
	);
}
