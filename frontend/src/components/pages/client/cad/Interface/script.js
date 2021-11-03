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

export default function cadCore() {
	const SOURCE_URL = "http://127.0.0.1:8887/model.obj";
	const STATUS_ELEMENT = document.getElementById("status");

	// DEFAULT MESHES PARAMS
	const m = new THREE.MeshPhongMaterial({
		color: 0xffffff,
		flatShading: true,
	});
	m.side = THREE.DoubleSide;
	const r = new THREE.MeshPhongMaterial({
		color: 0xff0000,
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

	function sliceGeometry(UPlane, DPlane) {
		let objectGeometry = arm.children[0].geometry;

		let sliced = slice(objectGeometry, UPlane, DPlane);
		// 0.02,-0.2
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
		engraveGeometry(mold);
	});
	document.getElementById("computeCylinder").addEventListener("click", () => {
		cylinder = setCylinderParams(mold.geometry, m);
		scene.add(cylinder);
	});
	function setSliceAxis() {
		let UPlane_Ycoordinate = 0;
		let DPlane_Ycoordinate = 0;

		const UplaneG = new THREE.PlaneGeometry(0.5, 0.5);
		const Uplane = new THREE.Mesh(UplaneG, m);
		Uplane.translateX(-0.5);
		Uplane.rotateX(-Math.PI * 0.5);
		scene.add(Uplane);

		const DplaneG = new THREE.PlaneGeometry(0.5, 0.5);
		const Dplane = new THREE.Mesh(DplaneG, m);
		Dplane.translateX(-0.5);
		Dplane.rotateX(-Math.PI * 0.5);
		scene.add(Dplane);

		document.getElementById("upperPlaneUp").addEventListener("click", () => {
			Uplane.translateZ(0.01);
			UPlane_Ycoordinate += 0.01;
			renderer.render(scene, camera);
		});
		document.getElementById("upperPlaneDown").addEventListener("click", () => {
			Uplane.translateZ(-0.01);
			UPlane_Ycoordinate -= 0.01;
			renderer.render(scene, camera);
		});
		document.getElementById("lowerPlaneUp").addEventListener("click", () => {
			Dplane.translateZ(0.01);
			DPlane_Ycoordinate += 0.01;
			renderer.render(scene, camera);
		});
		document.getElementById("lowerPlaneDown").addEventListener("click", () => {
			Dplane.translateZ(-0.01);
			DPlane_Ycoordinate -= 0.01;
			renderer.render(scene, camera);
		});

		document.getElementById("confirmSlice").addEventListener("click", () => {
			sliceGeometry(UPlane_Ycoordinate, DPlane_Ycoordinate);
		});
	}

	document.getElementById("slice").addEventListener("click", () => {
		setSliceAxis();
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
}
