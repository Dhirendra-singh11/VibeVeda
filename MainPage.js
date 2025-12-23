
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });


// Auto Hide Scrollbar
let scrollTimeout;

/* Start with scrollbar hidden */
document.body.classList.add('hide-scrollbar');

window.addEventListener('scroll', () => {
    /* Show scrollbar while scrolling */
    document.body.classList.remove('hide-scrollbar');

    clearTimeout(scrollTimeout);

    /* Hide again after scrolling stops */
    scrollTimeout = setTimeout(() => {
        document.body.classList.add('hide-scrollbar');
    }, 700);
});
// ----------------------------------------