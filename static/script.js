window.addEventListener("scroll", function () {
    let scrollValue = window.scrollY / 5; // Adjust speed of zoom-in effect
    let scale = 1 + scrollValue / 100; // Increase scale based on scroll
    document.querySelector(".hero").style.transform = `scale(${scale})`;
});
