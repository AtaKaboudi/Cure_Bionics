//SET AND FORGET
import * as dat from "dat.gui";
import * as THREE from "three";
import { CubeTexture } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

var params = {
	arrowsLength: 0.5,
	arrowsOrigin: new THREE.Vector3(-1, 0, -1),
};

export default function init() {
	// Canvas
	const canvas = document.getElementById("canva");
	const scene = new THREE.Scene();

	scene.background = CubeTexture;

	// Lights

	const pointLight = new THREE.PointLight(0xffffff, 1);
	pointLight.position.x = 2;
	pointLight.position.y = 3;
	pointLight.position.z = 4;

	const pointLightBack = new THREE.PointLight(0xffffff, 1);
	pointLightBack.position.x = -2;
	pointLightBack.position.y = -3;
	pointLightBack.position.z = -4;

	const ambientlLight = new THREE.AmbientLight(0x404040); // soft white light

	scene.add(ambientlLight);
	scene.add(pointLightBack);
	scene.add(pointLight);

	// HANDLE WINDOW RESIZE
	const sizes = {
		width: window.innerWidth,
		height: window.innerHeight,
	};

	window.addEventListener("resize", () => {
		// Update sizes
		sizes.width = window.innerWidth;
		sizes.height = window.innerHeight;

		// Update camera
		camera.aspect = sizes.width / sizes.height;
		camera.updateProjectionMatrix();

		// Update renderer
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	});

	// CAMERA
	const camera = new THREE.PerspectiveCamera(
		36,
		sizes.width / sizes.height,
		0.25,
		16
	);
	camera.position.set(1, 0, 2);
	scene.add(camera);

	// RENDERER
	const renderer = new THREE.WebGLRenderer({
		canvas: canvas,
	});

	renderer.localClippingEnabled = true;
	renderer.setSize(sizes.width, sizes.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

	// CONTROLS
	const controls = new OrbitControls(camera, renderer.domElement);

	// HELPER AXIS X Y Z

	const dirX = new THREE.Vector3(1, 0, 0);
	const dirY = new THREE.Vector3(0, 1, 0);
	const dirZ = new THREE.Vector3(0, 0, 1);

	const arrowX = new THREE.ArrowHelper(
		dirX,
		params.arrowsOrigin,
		params.arrowsLength,
		0x3498db
	);
	const arrowY = new THREE.ArrowHelper(
		dirY,
		params.arrowsOrigin,
		params.arrowsLength,
		0x27ae60
	);
	const arrowZ = new THREE.ArrowHelper(
		dirZ,
		params.arrowsOrigin,
		params.arrowsLength,
		0xc0392b
	);

	scene.add(arrowX);
	scene.add(arrowY);
	scene.add(arrowZ);

	function set(attribute, value) {
		params[attribute] = value;
	}
	/*
	const gui = new dat.GUI();
	const lighFolder = gui.addFolder("Point Light");

	lighFolder.add(camera.position, "x", -10, 10);
	lighFolder.add(pointLight.position, "y", -10, 10);
	lighFolder.add(pointLight.position, "z", -10, 10);
	lighFolder.add(pointLight, "intensity", 0, 1);
	lighFolder.open();
    */

	return {
		scene: scene,
		renderer: renderer,
		camera: camera,
		controls: controls,
	};
}
