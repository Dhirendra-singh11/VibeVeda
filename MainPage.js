// Website Scroll Bar Effects

let scrollTimeout;

window.addEventListener("scroll", () => {
    document.body.classList.add("scrolling");

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        document.body.classList.remove("scrolling");
    }, 2000); // 👈 fade-out delay (timing)
});

// ------------------------------------------------------
// Navbar Scrolling Effects
   
   const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

// ----------------------------------------

// const cardList = document.getElementById("cardList");
// const sliderWrapper = document.querySelector(".slider-wrapper");
// const leftArrow = document.querySelector(".arrow.left");
// const rightArrow = document.querySelector(".arrow.right");

// function updateUI() {
//     const scrollLeft = cardList.scrollLeft;
//     const maxScroll = cardList.scrollWidth - cardList.clientWidth;

//     // Left arrow + fade
//     if (scrollLeft <= 0) {
//         leftArrow.classList.add("hidden");
//         sliderWrapper.classList.remove("show-left-fade");
//     } else {
//         leftArrow.classList.remove("hidden");
//         sliderWrapper.classList.add("show-left-fade");
//     }

//     // Right arrow + fade
//     if (scrollLeft >= maxScroll - 1) {
//         rightArrow.classList.add("hidden");
//         sliderWrapper.classList.remove("show-right-fade");
//     } else {
//         rightArrow.classList.remove("hidden");
//         sliderWrapper.classList.add("show-right-fade");
//     }
// }

// // Arrow clicks
// rightArrow.addEventListener("click", () => {
//     cardList.scrollLeft += 300;
// });

// leftArrow.addEventListener("click", () => {
//     cardList.scrollLeft -= 300;
// });

// // On scroll & load
// cardList.addEventListener("scroll", updateUI);
// window.addEventListener("load", updateUI);

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
