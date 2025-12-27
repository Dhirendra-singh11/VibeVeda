const center = document.querySelector(".center");

let scrollTimeout;

center.addEventListener("scroll", () => {
    center.classList.add("scrolling");

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        center.classList.remove("scrolling");
    }, 700);
});

const sidebar = document.querySelector(".left-panel");
const handle = document.querySelector(".resize-handle");

let isResizing = false;

const MIN_WIDTH = 72;
const MAX_WIDTH = 360;
const COLLAPSE_WIDTH = 100;

function syncCenter(width) {
  center.style.marginLeft = `${width}px`;
}

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
  syncCenter(newWidth);

  sidebar.classList.toggle("collapsed", newWidth <= COLLAPSE_WIDTH);
});

document.addEventListener("mouseup", () => {
  isResizing = false;
  document.body.style.cursor = "default";
  document.body.style.userSelect = "auto";
});

syncCenter(sidebar.offsetWidth);


// -----------------------------------------
document.querySelectorAll(".slider-wrapper").forEach(wrapper => {
    const cardList = wrapper.querySelector(".music-card-list");
    const leftArrow = wrapper.querySelector(".arrow.left");
    const rightArrow = wrapper.querySelector(".arrow.right");

    if (!cardList || !leftArrow || !rightArrow) return;

    function updateUI() {
        const scrollLeft = cardList.scrollLeft;
        const maxScroll = cardList.scrollWidth - cardList.clientWidth;

        if (scrollLeft <= 0) {
            leftArrow.classList.add("hidden");
            wrapper.classList.remove("show-left-fade");
        } else {
            leftArrow.classList.remove("hidden");
            wrapper.classList.add("show-left-fade");
        }

        if (scrollLeft >= maxScroll - 1) {
            rightArrow.classList.add("hidden");
            wrapper.classList.remove("show-right-fade");
        } else {
            rightArrow.classList.remove("hidden");
            wrapper.classList.add("show-right-fade");
        }
    }

    rightArrow.addEventListener("click", () => {
        cardList.scrollLeft += 300;
    });

    leftArrow.addEventListener("click", () => {
        cardList.scrollLeft -= 300;
    });

    cardList.addEventListener("scroll", updateUI);
    updateUI();
});