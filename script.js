// =========================
// DARK MODE
// =========================

const darkBtn = document.getElementById("darkMode");

if (darkBtn) {
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

// =========================
// SIMPLE SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
.dark-mode{
    background:#0b1220;
    color:white;
}

.dark-mode .features,
.dark-mode .units{
    background:#0f172a;
}

.dark-mode .feature-card,
.dark-mode .unit-card{
    background:#111827;
    color:white;
}
