import Progress from "./progress.js";

const container = document.getElementById("progress-container");
const progress = new Progress(container, 120, 10);
const valueInput = document.getElementById("value");
const animateCheckbox = document.getElementById("animate");
const hideCheckbox = document.getElementById("hide");

valueInput.addEventListener("input", (e) => {
  progress.setValue(+e.target.value);
});

animateCheckbox.addEventListener("change", (e) => {
  e.target.checked ? progress.startAnimation() : progress.stopAnimation();
});

hideCheckbox.addEventListener("change", (e) => {
  e.target.checked ? progress.hide() : progress.show();
});

valueInput.value = 60;
progress.setValue(60);
