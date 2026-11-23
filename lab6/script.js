
// ==============================
// 1. DARK / LIGHT MODE
// ==============================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    if (isDark) {
        themeToggle.textContent = "☀️ Light mode";
        themeToggle.setAttribute("aria-label", "Light mode руу шилжих");
    } else {
        themeToggle.textContent = "🌙 Dark mode";
        themeToggle.setAttribute("aria-label", "Dark mode руу шилжих");
    }

});

// ==============================
// 2. FLIP CARD BUTTON
// ==============================

const flipToggle = document.getElementById("flipToggle");
const cards = document.querySelectorAll(".flip-card");

flipToggle.addEventListener("click", function () {

    const isFlipped = flipToggle.getAttribute("aria-pressed") === "true";

    cards.forEach(function (card) {
        card.classList.toggle("flipped", !isFlipped);
    });

    flipToggle.setAttribute("aria-pressed", String(!isFlipped));

    if (!isFlipped) {
        flipToggle.textContent = "↩️ Зургийг буцаах";
    } else {
        flipToggle.textContent = "🔄 Зургийг эргүүлэх";
    }

});
