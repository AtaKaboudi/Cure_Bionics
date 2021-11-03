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
	document.getElementById("slice").addEventListener("click", () => {
		document.getElementById("slicePannel").style.display = "flex";
	});
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
				<button id="slice" title="slice">
					<span class="material-icons">content_cut</span>{" "}
				</button>
				<div id="slicePannel">
					<div className="slicePlaneWrapper">
						<div className="row">
							<span id="upperPlaneUp" class="material-icons">
								expand_less
							</span>
							<span id="upperPlaneDown" class="material-icons">
								expand_more
							</span>
						</div>
						<label>UpperPlane</label>
					</div>
					<div className="slicePlaneWrapper">
						<div className="row">
							<span id="lowerPlaneUp" class="material-icons">
								expand_less
							</span>
							<span id="lowerPlaneDown" class="material-icons">
								expand_more
							</span>
						</div>
						<label>LowerPlane</label>
					</div>

					<button id="confirmSlice" title="confirm">
						<span class="material-icons">check</span>{" "}
					</button>
				</div>

				<button id="measure" title="Measure">
					<span class="material-icons">straighten</span>{" "}
				</button>
				<button id="computeCylinder" title="Add Cylinder">
					<span class="material-icons">radio_button_unchecked</span>
				</button>
				<button id="engrave" title="Engrave">
					<span class="material-icons">carpenter</span>
				</button>
			</div>
		</div>
	);
}
/*
 */
