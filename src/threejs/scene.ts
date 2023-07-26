import * as THREE from "three";

// Scene
export const scene = new THREE.Scene();

// Light
export const light = new THREE.PointLight("#fff", 1, 100);
// light.position.set(1st arg: x, 2nd arg: y, 3rd arg: z)
light.position.set(0, 10, 10);
scene.add(light);
