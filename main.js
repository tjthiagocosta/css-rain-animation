let cloud = document.querySelector("#cloud");

function rain() {
  let e = document.createElement("div");
  let left = Math.floor(Math.random() * 310);
  let width = Math.random() * 4;
  let height = Math.random() * 40;
  let duration = Math.random() * 0.5;

  e.classList.add("drop");
  cloud.appendChild(e);
  e.style.left = `${left}px`;
  e.style.width = `${0.5 + width}px`;
  e.style.height = `${0.5 + height}px`;
  e.style.animationDuration = `${1 + duration}s`;

  setTimeout(() => {
    cloud.removeChild(e);
  }, 2500);
}
function lightning() {
  let duration = Math.random() * 0.5;
  cloud.style.animationDuration = `${1.5 + duration}s`;
}

setInterval(() => {
  rain();
}, 15);

setInterval(() => {
  lightning();
}, 100);
