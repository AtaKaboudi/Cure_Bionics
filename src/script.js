import "./style.css";
import init from "./init";
import { slice } from "./utils";
import { rotateY } from "./animate";
import { loadOBJ } from "./io";

import * as THREE from "three";
import { BufferGeometry, BufferGeometryUtils } from "three";
const SOURCE_URL = "http://127.0.0.1:8887/model.obj";

// INIT SETTINGS

const view = init();
const { scene, renderer, camera, controls } = view;

var arm;

loadOBJ(SOURCE_URL, (object) => {
	arm = object;
	object.scale.multiplyScalar(10);
	object.translateX(2);

	scene.add(object);
	rotateY(object, view);
});

document.getElementById("slice").addEventListener("click", () => {
	const m = new THREE.MeshPhongMaterial({
		color: 0xffffff, // red (can also use a CSS color string here)
		flatShading: true,
	});
	m.side = THREE.DoubleSide;

	let objectGeometry = arm.children[0].geometry;

	let prosteticGeometry = slice(objectGeometry, 0.02, -0.2);

	const geometry = new THREE.CylinderBufferGeometry(0.1, 0.1, 0.1, 20, 10);

	var prostetic = new THREE.Mesh(prosteticGeometry, m);
	prostetic.scale.multiplyScalar(10);
	//scene.add(prostetic)

	renderer.render(scene, camera);
});
