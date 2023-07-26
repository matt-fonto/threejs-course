import * as THREE from "three";
import { scene } from "./scene";

// Material
export const material = new THREE.MeshStandardMaterial({ color: "purple" });

// Geometry
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);

// Mesh
export const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
