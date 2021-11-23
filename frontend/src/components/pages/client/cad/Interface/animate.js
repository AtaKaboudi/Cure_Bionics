import { Clock } from "three";

const clock = new Clock();

export function rotateY(object, view) {
	var { renderer, scene, camera, controls } = view;
	function animate() {
		const elapsedTime = clock.getElapsedTime();

		// Update objects
		//object.rotation.y = 0.5 * elapsedTime;

		// Update Orbital Controls
		controls.update();

		// Render
		renderer.render(scene, camera);

		// Call tick again on the next frame
		window.requestAnimationFrame(animate);
	}
	animate();
}
