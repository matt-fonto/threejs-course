import * as THREE from "three";
import { mesh } from "./geometry";

// Sizes
export const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Camera
export const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  0.1,
  100
);

camera.position.z = 20; // Set a distance that ensures the object is within the field of view
camera.lookAt(mesh.position); // Ensure the camera is looking at the mesh
