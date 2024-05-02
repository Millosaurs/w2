let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        header.style.transform = "translateY(-100%)"; // Move the header out of view
    } else {
        // Scrolling up
        header.style.transform = "translateY(0)"; // Show the header
    }

    lastScrollTop = currentScroll;
    
    // Smooth transition
    header.style.transition = "transform 0.3s ease"; // Adjust the duration and timing function as needed
});
