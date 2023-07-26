import "./index.css";
import { animate, renderer } from "./threejs/renderer";
import { camera, sizes } from "./threejs/camera";
import * as THREE from "three";

animate();

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  if (renderer) renderer.setSize(sizes.width, sizes.height);
});
