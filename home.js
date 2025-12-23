const sidebar = document.querySelector(".left-panel");
const handle = document.querySelector(".resize-handle");

let isResizing = false;

const MIN_WIDTH = 72;
const MAX_WIDTH = 360;
const COLLAPSE_WIDTH = 100;

handle.addEventListener("mousedown", (e) => {
  isResizing = true;
  document.body.style.cursor = "ew-resize";
  document.body.style.userSelect = "none";
  e.preventDefault();
});

document.addEventListener("mousemove", (e) => {
  if (!isResizing) return;

  const sidebarLeft = sidebar.getBoundingClientRect().left;
  let newWidth = e.clientX - sidebarLeft;

  newWidth = Math.max(MIN_WIDTH, Math.min(MAX_WIDTH, newWidth));
  sidebar.style.width = `${newWidth}px`;

  sidebar.classList.toggle("collapsed", newWidth <= COLLAPSE_WIDTH);
});

document.addEventListener("mouseup", () => {
  isResizing = false;
  document.body.style.cursor = "default";
  document.body.style.userSelect = "auto";
});
