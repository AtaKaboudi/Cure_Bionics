import init from "./init";
import { rotateY } from "./animate";
import { loadOBJ, measure } from "../core";
import { exportObject } from "./exporter";

import {
	Receiver,
	sliceObject,
	measureObject,
	engraveObject,
	generateCylidner,
	exportObject_,
	translateObject,
	rotateObject,
	computeDimensions_,
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
	// Array of objects to be created
	var objects = [];

	// INIT SETTINGS

	const view = init();
	const { scene, renderer, camera, controls } = view;

	let receiver = new Receiver();
	let sliceeObjectCommand = new sliceObject();
	let engraveObjectCommand = new engraveObject();
	let generateCylinderCommand = new generateCylidner();
	let measureObjectCommand = new measureObject();
	let exportObjectCommand = new exportObject_();
	let translateObjectCommand = new translateObject();
	let rotateObjectCommand = new rotateObject();
	let computeDimensionsCommand = new computeDimensions_();
	loadOBJ(SOURCE_URL, STATUS_ELEMENT, (object) => {
		let vertices;
		if (object instanceof THREE.Group) {
			vertices = object.children[0].geometry.attributes.position.array;
		} else if (object instanceof THREE.Mesh) {
			vertices = object.geometry.attributes.position.array;
		}

		//	let measurements = receiver.execute(computeDimensionsCommand, [vertices]);

		// to rescale object to 0-1 unit scale
		//let scaleY = 1 / Math.abs(measurements.maxY - measurements.minY);
		//object.children[0].scale.multiplyScalar(scaleY);

		// translate to right initial Position
		//			object.children[0].position.set(-1.1, 0.2, 0.2);
		object.children[0].position.set(-0.5, 0, 0);

		arm = object;

		scene.add(object);
		rotateY(object, view);
		renderer.render(scene, camera);
	});

	document.getElementById("engrave").addEventListener("click", () => {
		let final = receiver.execute(engraveObjectCommand, [cylinder, mold]);
		objects.push(final);
		final.translateX(0.5);
		scene.add(final);
	});
	document.getElementById("computeCylinder").addEventListener("click", () => {
		cylinder = receiver.execute(generateCylinderCommand, [mold.geometry, m]);
		objects.push(cylinder);
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
			receiver.execute(translateObjectCommand, [Uplane, "z", 0.01]);
			renderer.render(scene, camera);
		});
		document.getElementById("upperPlaneDown").addEventListener("click", () => {
			receiver.execute(translateObjectCommand, [Uplane, "z", -0.01]);
			renderer.render(scene, camera);
		});
		document.getElementById("lowerPlaneUp").addEventListener("click", () => {
			receiver.execute(translateObjectCommand, [Dplane, "z", 0.01]);
			renderer.render(scene, camera);
		});
		document.getElementById("lowerPlaneDown").addEventListener("click", () => {
			receiver.execute(translateObjectCommand, [Dplane, "z", -0.01]);
			renderer.render(scene, camera);
		});

		document.getElementById("confirmSlice").addEventListener("click", () => {
			let objectGeometry = arm.children[0].geometry;

			let geo = receiver.execute(sliceeObjectCommand, [
				objectGeometry,
				Uplane.position.y,
				Dplane.position.y,
			]);
			mold = new THREE.Mesh(geo, m);
			console.log(mold);
			objects.push(mold);

			scene.add(mold);
			let { edge } = receiver.execute(measureObjectCommand, [mold.geometry]);
		});
	}

	//SET CONTROLLERS ACTIONS
	document.getElementById("controllerUp").addEventListener("click", () => {
		receiver.execute(translateObjectCommand, [arm, "y", 0.01]);
	});
	document.getElementById("controllerDown").addEventListener("click", () => {
		receiver.execute(translateObjectCommand, [arm, "y", -0.01]);
	});
	document.getElementById("controllerLeft").addEventListener("click", () => {
		receiver.execute(translateObjectCommand, [arm, "x", -0.01]);
	});
	document.getElementById("controllerRight").addEventListener("click", () => {
		receiver.execute(translateObjectCommand, [arm, "x", +0.01]);
	});
	document.getElementById("rotateX+").addEventListener("click", () => {
		receiver.execute(rotateObjectCommand, [arm, "x", +0.05]);
	});
	document.getElementById("rotateX-").addEventListener("click", () => {
		receiver.execute(rotateObjectCommand, [arm, "x", -0.05]);
	});
	document.getElementById("rotateY+").addEventListener("click", () => {
		receiver.execute(rotateObjectCommand, [arm, "y", +0.05]);
	});
	document.getElementById("rotateY-").addEventListener("click", () => {
		receiver.execute(rotateObjectCommand, [arm, "y", -0.05]);
	});
	document.getElementById("rotateZ+").addEventListener("click", () => {
		receiver.execute(rotateObjectCommand, [arm, "z", +0.05]);
	});
	document.getElementById("rotateZ-").addEventListener("click", () => {
		receiver.execute(rotateObjectCommand, [arm, "z", -0.05]);
	});
}
