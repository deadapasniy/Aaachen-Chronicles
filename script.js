document.querySelectorAll("nav ul li a").forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.style.transform = "scale(1.1)";
        item.style.transition = "0.3s";
    });
    item.addEventListener("mouseleave", () => {
        item.style.transform = "scale(1)";
    });
});