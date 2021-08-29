import "./style.css";
import init from "./init";
import { rotateY } from "./animate";
import { loadOBJ } from "../core";
import {
	slice,
	engrave,
	measure,
	getCenterPoint,
	setCylinderParams,
} from "../core";

import * as THREE from "three";
import { CylinderBufferGeometry } from "three";

const SOURCE_URL = "http://127.0.0.1:8887/model.obj";
const STATUS_ELEMENT = document.getElementById("status");

// DEFAULT MESHES PARAMS
const m = new THREE.MeshPhongMaterial({
	color: 0xffffff, // red (can also use a CSS color string here)
	flatShading: true,
});
m.side = THREE.DoubleSide;
const r = new THREE.MeshPhongMaterial({
	color: 0xff0000, // red (can also use a CSS color string here)
	flatShading: true,
});
r.side = THREE.DoubleSide;

var arm;

var cylinder;

var mold;

// INIT SETTINGS

const view = init();
const { scene, renderer, camera, controls } = view;

loadOBJ(SOURCE_URL, STATUS_ELEMENT, (object) => {
	arm = object;
	object.translateX(-0.5);
	scene.add(object);
	rotateY(object, view);
});

function sliceGeometry() {
	let objectGeometry = arm.children[0].geometry;

	let sliced = slice(objectGeometry, 0.02, -0.2);

	/* Hand Mold */
	let moldGeometry = sliced.section;

	mold = new THREE.Mesh(moldGeometry, m);

	scene.add(mold);
}

function engraveGeometry() {
	let final = engrave(cylinder, mold);
	final.translateX(0.5);
	scene.add(final);
}

document.getElementById("engrave").addEventListener("click", () => {
	let a = engraveGeometry(mold);
	a.translateX(0.5);
	scene.Add(a);
});
document.getElementById("computeCylinder").addEventListener("click", () => {
	cylinder = setCylinderParams(mold.geometry, m);
	scene.add(cylinder);
});
function setSliceAxis() {
	const UplaneG = new THREE.PlaneGeometry(0.5, 0.5);
	const Uplane = new THREE.Mesh(UplaneG, m);
	Uplane.translateX(0.3);
	Uplane.rotateX(DegToEuler(90));
	scene.add(Uplane);
}
function DegToEuler(nb) {
	return (nb / (2 * Math.PI)) * 360;
}
document.getElementById("slice").addEventListener("click", () => {
	setSliceAxis();
	sliceGeometry();
});

document.getElementById("measure").addEventListener("click", () => {
	let { edge } = measure(mold.geometry);

	var g = new THREE.BufferGeometry();
	g.setAttribute(
		"position",
		new THREE.BufferAttribute(new Float32Array(edge), 3)
	);
	let mesh = new THREE.Mesh(g, r);

	scene.add(mesh);
});
