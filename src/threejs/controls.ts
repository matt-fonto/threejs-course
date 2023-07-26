import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { camera } from "./camera";
import { renderer } from "./renderer";

let renderedElement: any;
export let controls: OrbitControls;

export function createControls() {
  if (!renderedElement) {
    renderedElement = document.querySelector(".webgl");
  }

  const controls = new OrbitControls(camera, renderedElement);
  controls.enableDamping = true;
  controls.autoRotate = true;

  return controls;
}
