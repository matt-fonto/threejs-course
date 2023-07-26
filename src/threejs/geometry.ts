import * as THREE from "three";
import { scene } from "./scene";

// Material
export const material = new THREE.MeshStandardMaterial({ color: "blue" });

// Geometry
export const geometry = new THREE.OctahedronGeometry(7.15, 1);

// Mesh
export const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
