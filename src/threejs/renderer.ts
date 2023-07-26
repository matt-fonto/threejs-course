import * as THREE from "three";
import { scene } from "./scene";
import { camera } from "./camera";
import { createControls } from "./controls";

export let renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
export const canvas = document.querySelector(".webgl");
let controls = createControls();

if (!canvas) {
  console.error(
    'Cannot find element with class "webgl". Please check your HTML file.'
  );
} else {
  renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

// Render loop
export function animate() {
  controls.update();
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

animate(); // Start animation
