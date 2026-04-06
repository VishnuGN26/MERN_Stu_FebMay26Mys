
const elements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
        }
    });
}, { threshold: 0.1 });

elements.forEach(el => {
    el.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-700");
    observer.observe(el);
});
