export default class Progress {
  constructor(container, size = 120, strokeWidth = 10) {
    this.size = size;
    this.strokeWidth = strokeWidth;

    container.innerHTML = `
        <svg
          width="${size}"
          height="${size}"
          viewBox="0 0 ${size} ${size}"
          class="progress-svg"
          style="transform: rotate(-90deg)"
        >
          <circle
            class="progress-bg"
            cx="${size / 2}" cy="${size / 2}" r="${(size - strokeWidth) / 2}"
            stroke="#eee" stroke-width="${strokeWidth}" fill="none"
          />
          <circle
            class="progress-fg"
            cx="${size / 2}" cy="${size / 2}" r="${(size - strokeWidth) / 2}"
            stroke="#007aff" stroke-width="${strokeWidth}"
            fill="none" stroke-linecap="round"
          />
        </svg>
      `;

    this.svg = container.querySelector(".progress-svg");
    this.fg = container.querySelector(".progress-fg");

    this.circle = 2 * Math.PI * ((size - strokeWidth) / 2);
    this.fg.style.strokeDasharray = this.circle;
    this.fg.style.strokeDashoffset = this.circle;
  }

  setValue(value) {
    this.fg.style.strokeDashoffset = this.circle * (1 - value / 100);
  }

  startAnimation() {
    this.svg.classList.add("rotate");
  }

  stopAnimation() {
    this.svg.classList.remove("rotate");
  }

  show() {
    this.svg.style.visibility = "visible";
  }

  hide() {
    this.svg.style.visibility = "hidden";
  }
}
