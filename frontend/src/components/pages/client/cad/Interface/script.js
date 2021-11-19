import init from "./init";
import { rotateY } from "./animate";
import { loadOBJ } from "../core";
import { exportObject } from "./exporter";
import {
	slice,
	engrave,
	measure,
	getCenterPoint,
	setCylinderParams,
} from "../core";

import {
	Receiver,
	sliceObject,
	measureObject,
	engraveObject,
	generateCylidner,
	exportObject_,
} from "./commands/command";
import * as THREE from "three";

export default function cadCore(url) {
	const SOURCE_URL = url;
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

	let receiver = new Receiver();
	let sliceeObjectCommand = new sliceObject();
	let engraveObjectCommand = new engraveObject();
	let generateCylinderCommand = new generateCylidner();
	let measureObjectCommand = new measureObject();
	let exportObjectCommand = new exportObject_();

	loadOBJ(SOURCE_URL, STATUS_ELEMENT, (object) => {
		arm = object;
		console.log(arm);
		object.translateX(-0.5);
		scene.add(object);
		rotateY(object, view);
	});

	document.getElementById("engrave").addEventListener("click", () => {
		let final = receiver.execute(engraveObjectCommand, [cylinder, mold]);
		final.translateX(0.5);
		scene.add(final);
	});
	document.getElementById("computeCylinder").addEventListener("click", () => {
		cylinder = receiver.execute(generateCylinderCommand, [mold.geometry, m]);
		scene.add(cylinder);
	});
	document.getElementById("export").addEventListener("click", () => {
		receiver.execute(exportObjectCommand, [
			scene.children[scene.children.length - 1],
		]);
	});

	document.getElementById("slice").addEventListener("click", () => {
		setSliceAxis();
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
			//sliceGeometry(UPlane_Ycoordinate, DPlane_Ycoordinate);
			let objectGeometry = arm.children[0].geometry;

			let geo = receiver.execute(sliceeObjectCommand, [
				objectGeometry,
				UPlane_Ycoordinate,
				DPlane_Ycoordinate,
			]);

			mold = new THREE.Mesh(geo, m);
			scene.add(mold);

			let { edge } = receiver.execute(measureObjectCommand, [mold.geometry]);
		});
	}
}
