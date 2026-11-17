
/* =========================================
   ARSHIA SAHEBZADEH
   PERSONAL PORTFOLIO
   Main JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* 01. ELEMENTS */

    const themeToggle = document.getElementById("themeToggle");
    const languageToggle = document.getElementById("languageToggle");
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    /* 02. THEME TOGGLE */

    const savedTheme = localStorage.getItem("theme") || "light";

    document.documentElement.dataset.theme = savedTheme;

    function updateThemeIcon() {
        const currentTheme = document.documentElement.dataset.theme;

        if (themeToggle) {
            themeToggle.textContent =
                currentTheme === "dark" ? "☀" : "◐";
        }
    }

    updateThemeIcon();

    themeToggle?.addEventListener("click", () => {
        const currentTheme = document.documentElement.dataset.theme;

        const newTheme =
            currentTheme === "dark" ? "light" : "dark";

        document.documentElement.dataset.theme = newTheme;

        localStorage.setItem("theme", newTheme);

        updateThemeIcon();
    });


    /* 03. LANGUAGE TOGGLE */

    const savedLanguage = localStorage.getItem("language") || "fa";

    function changeLanguage(language) {

        document.documentElement.lang = language;

        document.documentElement.dir =
            language === "fa" ? "rtl" : "ltr";

        document.querySelectorAll("[data-fa][data-en]").forEach(element => {

            element.textContent =
                element.getAttribute(`data-${language}`);

        });

        if (languageToggle) {
            languageToggle.textContent =
                language === "fa" ? "EN" : "FA";
        }

        localStorage.setItem("language", language);
    }

    changeLanguage(savedLanguage);

    languageToggle?.addEventListener("click", () => {

        const currentLanguage =
            document.documentElement.lang;

        const newLanguage =
            currentLanguage === "fa" ? "en" : "fa";

        changeLanguage(newLanguage);

    });


    /* 04. MOBILE MENU */

    menuToggle?.addEventListener("click", () => {

        const isActive = mainNav.classList.toggle("active");

        menuToggle.textContent = isActive ? "✕" : "☰";

        menuToggle.setAttribute(
            "aria-label",
            isActive ? "Close menu" : "Open menu"
        );

    });

    /* Close menu after clicking a link */

    mainNav?.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("active");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute("aria-label", "Open menu");

        });

    });


    /* 05. CLOSE MENU ON OUTSIDE CLICK */

    document.addEventListener("click", event => {

        if (
            mainNav &&
            menuToggle &&
            !mainNav.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            mainNav.classList.remove("active");

            menuToggle.textContent = "☰";

        }

    });


    /* 06. ESCAPE KEY */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape" && mainNav) {

            mainNav.classList.remove("active");

            if (menuToggle) {
                menuToggle.textContent = "☰";
            }

        }

    });

});
