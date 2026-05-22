//scroll animation
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) 
        {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

fadeElements.forEach((el) => {
    observer.observe(el);
});

//light/dark mode toggle
const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

if(savedTheme === "light" || (!savedTheme && prefersLight)) {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "Dark Mode";
} 
else {
    themeToggle.textContent = "Light Mode";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "Dark Mode";
    } 
    else {
        themeToggle.textContent = "Light Mode";
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "Light Mode";
    }
});