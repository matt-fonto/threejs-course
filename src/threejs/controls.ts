import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { camera } from "./camera";

let renderedElement: any;
export let controls: OrbitControls;

export function createControls() {
  if (!renderedElement) {
    renderedElement = document.querySelector(".webgl");
  }

  const controls = new OrbitControls(camera, renderedElement);
  controls.enableDamping = true;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 5;
  controls.dampingFactor = 0.05;
  controls.enableZoom = true;

  return controls;
}
