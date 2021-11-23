import * as THREE from "three";
import { Geometry } from "three";
import { CSG } from "three-csg-ts";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const EPSILON = 0.001;
const CYLINDER_RADIUS_INDEX = 0.008;
export function slice(geometry, UyPlane, LyPlane) {
	const g = new THREE.BufferGeometry();

	let vertices = geometry.attributes.position.array.slice(0, 6025571);
	let normals = geometry.attributes.normal.array.slice(0, 6025571);

	let filtered = [];
	let fnormals = [];
	for (let i = 0; i < vertices.length; i++) {
		let index = i * 9;
		if (Math.abs(vertices[index + 1] - UyPlane) < 0.0005) {
			vertices[index + 1] = UyPlane;
			vertices[index + 4] = UyPlane;
			vertices[index + 7] = UyPlane;

			filtered.push(...vertices.slice(index, index + 9));
			fnormals.push(...normals.slice(index, index + 9));
		} else if (
			(vertices[index + 1] > LyPlane - 0.0005) &
			(vertices[index + 1] < LyPlane)
		) {
			vertices[index + 1] = LyPlane;
			vertices[index + 4] = LyPlane;
			vertices[index + 7] = LyPlane;

			filtered.push(...vertices.slice(index, index + 9));
			fnormals.push(...normals.slice(index, index + 9));
		} else if (vertices[index + 1] > LyPlane && vertices[index + 1] < UyPlane) {
			filtered.push(...vertices.slice(index, index + 9));
			fnormals.push(...normals.slice(index, index + 9));
		}
	}

	g.setAttribute(
		"position",
		new THREE.BufferAttribute(new Float32Array(filtered), 3)
	);
	g.setAttribute(
		"normal",
		new THREE.BufferAttribute(new Float32Array(fnormals), 3)
	);
	g.cureParams = {};
	g.cureParams = { upperPlane: UyPlane, lowerPlane: LyPlane };

	return g;
}

export function engrave(objectA, objectB) {
	objectA.updateMatrix();
	objectB.updateMatrix();

	//SUBSTRACTION CSG
	console.time("runtime");

	var result = CSG.subtract(objectA, objectB);

	console.timeEnd("runtime");

	return result;
}

export async function loadOBJ(SOURCE_URL, statusElement, callback) {
	// instantiate a loader
	const loader = new OBJLoader();
	console.log(SOURCE_URL);

	// load a resource
	loader.load(
		// resource URL
		"http://127.0.0.1:8887/model.obj",

		// called when resource is loaded
		function (object) {
			callback(object);
		},

		// called when loading is in progresses
		function (xhr) {
			statusElement.textContent = ((xhr.loaded / xhr.total) * 100).toFixed(1);
		},

		// called when loading has errors
		function (error) {
			console.log("[OBJ Loader] Error");
			//console.trace(error);
		}
	);
}
export function measure(geometry) {
	let vertices = geometry.attributes.position.array;

	//RETREIVE UPPER AND LOWER EDGES
	var { upperPlane, lowerPlane } = geometry.cureParams;
	var upperEdge = [];
	var lowerEdge = [];

	for (let i = 0; i < vertices.length; i += 3) {
		if (Math.abs(vertices[i + 1] - upperPlane) < EPSILON) {
			upperEdge.push(...vertices.slice(i, i + 3));
		} else if (Math.abs(vertices[i + 1] - lowerPlane) < EPSILON) {
			lowerEdge.push(...vertices.slice(i, i + 3));
		}
	}
	let UDimensions = computeDimensions(upperEdge);
	let LDimensions = computeDimensions(lowerEdge);

	geometry.cureParams.UDimensions = UDimensions;
	geometry.cureParams.LDimensions = LDimensions;
	geometry.cureParams.center = getCenterPoint(geometry);
	return geometry;
}

function computeDimensions(vertices) {
	// COMPUTE MAXIMA AND MINIMA IN EDGES ON Z?X AXIS
	let minX = vertices[0];
	let maxX = vertices[0];
	let minZ = vertices[2];
	let maxZ = vertices[2];

	for (let i = 0; i < vertices.length; i += 3) {
		if (vertices[i] < minX) {
			minX = vertices[i];
		}
		if (vertices[i] > maxX) {
			maxX = vertices[i];
		}

		if (vertices[i + 2] < minZ) {
			minZ = vertices[i + 2];
		}
		if (vertices[i + 2] > maxZ) {
			maxZ = vertices[i + 2];
		}
	}
	return {
		maxX: maxX,
		minX: minX,
		maxZ: maxZ,
		minZ: minZ,
	};
}

export function setCylinderParams(geometry, material) {
	/* Cylinder */

	let dimensions = geometry.cureParams;
	console.log(geometry);

	let length = dimensions.upperPlane - dimensions.lowerPlane;

	let radiusX = Math.abs(
		dimensions.UDimensions.maxX - dimensions.UDimensions.minX
	);
	let radiusZ = Math.abs(
		dimensions.UDimensions.maxZ - dimensions.UDimensions.minZ
	);

	let topRadius = radiusX > radiusZ ? radiusX / 2 : radiusZ / 2;

	radiusX = Math.abs(dimensions.LDimensions.maxX - dimensions.LDimensions.minX);
	radiusZ = Math.abs(dimensions.LDimensions.maxZ - dimensions.LDimensions.minZ);

	let bottomRadius = radiusX > radiusZ ? radiusX / 2 : radiusZ / 2;

	let cylinderG = new THREE.CylinderBufferGeometry(
		topRadius + CYLINDER_RADIUS_INDEX,
		bottomRadius + CYLINDER_RADIUS_INDEX,
		length - 0.01,
		100,
		10,
		false
	);

	// SET CYLINDER POSITION TO MOLD CENTER
	let x = dimensions.center.x;
	let y = dimensions.center.y;
	let z = dimensions.center.z;

	let cylinderCenter = getCenterPoint(cylinderG);
	let cylinder = new THREE.Mesh(cylinderG, material);

	// TRANSLATE TO CORRECT CENTER
	cylinder.translateOnAxis(
		new THREE.Vector3(1, 0, 0),
		Math.abs(cylinderCenter.x - x)
	);
	cylinder.translateOnAxis(
		new THREE.Vector3(0, -1, 0),
		Math.abs(cylinderCenter.y - y)
	);
	cylinder.translateOnAxis(
		new THREE.Vector3(0, 0, -1),
		Math.abs(cylinderCenter.z - z)
	);

	return cylinder;
}

export function getCenterPoint(geometry) {
	var middle = new THREE.Vector3();

	geometry.computeBoundingBox();

	middle.x = (geometry.boundingBox.max.x + geometry.boundingBox.min.x) / 2;
	middle.y = (geometry.boundingBox.max.y + geometry.boundingBox.min.y) / 2;
	middle.z = (geometry.boundingBox.max.z + geometry.boundingBox.min.z) / 2;

	return { x: middle.x, y: middle.y, z: middle.z };
}

export function translate(mesh, axis, distance) {
	if (axis === "z") mesh.translateZ(distance);
	if (axis === "x") mesh.translateX(distance);
	if (axis === "y") mesh.translateY(distance);
}

export function rotate(mesh, axis, rad) {
	if (axis === "z") mesh.rotateZ(rad);
	if (axis === "x") mesh.rotateX(rad);
	if (axis === "y") mesh.rotateY(rad);
}
