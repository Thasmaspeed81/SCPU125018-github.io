// Smooth Scroll
document.querySelectorAll("a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Penguin click animation
const penguin = document.querySelector(".penguin");

penguin.addEventListener("click", () => {
    penguin.style.transform = "rotate(360deg)";
    penguin.style.transition = "0.5s";

    setTimeout(() => {
        penguin.style.transform = "rotate(0deg)";
    }, 500);
});
