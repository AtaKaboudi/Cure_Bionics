import react from "react";
import { useEffect } from "react";
import * as THREE from "three";
import { CubeTexture } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";
import init from "./Interface/init";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { rotateY } from "./animate";

export default function Cad() {
	useEffect(() => {
		let canvas = document.getElementById("canva");
		let view = init(canvas);
		let { scene, renderer, camera, controls } = view;
		// instantiate a loader
		const loader = new OBJLoader();

		// load a resource
		loader.load(
			// resource URL
			"http://127.0.0.1:8887/model.obj",

			// called when resource is loaded
			function (object) {
				object.translateX(-0.5);
				scene.add(object);
				rotateY(object, view);
			},

			// called when loading is in progresses
			function (xhr) {
				console.log((xhr.loaded / xhr.total) * 100);
			},

			// called when loading has errors
			function (error) {
				console.trace(error);
			}
		);
		renderer.render(scene, camera);
	}, []);
	return (
		<div className="cadContainer">
			<canvas id="canva"></canvas>
		</div>
	);
}
