/* ----- Testimonial slider ----- */
function testimonialSlider() {
    const carouselOne = document.getElementById("carouselOne");
    if (carouselOne) {
        carouselOne.addEventListener('slid.bs.carousel', function () {
            const activeItem = this.querySelector(".active");
            document.querySelector(".js-testimonial-img").src =
                activeItem.getAttribute("data-js-testimonial-img");
        })
    }
}
testimonialSlider();



/*----- Course preview video ----- */
function CoursePreviewVideo() {
    const coursePreviewModal = document.querySelector('.js-course-preview-modal');
    if (coursePreviewModal) {
        coursePreviewModal.addEventListener("shown.bs.modal", function () {
            this.querySelector(".js-course-preview-video").play();
            this.querySelector(".js-course-preview-video").currentTime = 0;
        });
        coursePreviewModal.addEventListener(".hide.bs.modal", function () {
            this.querySelector(".js-course-preview-video").pause();
        });
    }
}
CoursePreviewVideo();


/* ----- Header Menu ----- */
function HeaderMenu() {
    const menu = document.querySelector(".js-header-menu"),
        backdrop = document.querySelector(".js-header-backdrop"),
        menuCollapse = 991;

    function Collapse() {
        menu.querySelector(".active .js-sub-menu").removeAttribute("style");
        menu.querySelector(".active").classList.remove("active");
    }

    menu.addEventListener("click", (event) => {
        const { target } = event;

        if (target.classList.contains("js-toggle-sub-menu") && window.innerWidth <= menuCollapse) {
            event.preventDefault();

            //collapse  if -> menu-item exists.
            if (menu.querySelector(".active")) {
                Collapse();
            }

            target.parentElement.classList.add("active");
            target.nextElementSibling.style.maxHeight =
                target.nextElementSibling.scrollHeight + "px";
        }
    });
}
HeaderMenu();



/* ----- Style Switcher ----- */
function StyleSwitcherToggle() {
    const styleSwitcher = document.querySelector(".js-style-switcher");
    const styleSwitcherToggler = document.querySelector(".js-style-switcher-toggler");

    styleSwitcherToggler.addEventListener("click", function () {
        styleSwitcher.classList.toggle("open");
        this.querySelector("i").classList.toggle("fa-times");
        this.querySelector("i").classList.toggle("fa-cog");
    });
}
StyleSwitcherToggle();



/* ----- Theme colors ----- */
function ThemeColors() {
    const colorStyle = document.querySelector(".js-color-style");
    const themeColorsContainer = document.querySelector(".js-theme-colors");

    themeColorsContainer.addEventListener("click", ({ target }) => {
        if (target.classList.contains("js-theme-color-item")) {
            localStorage.setItem("color", target.getAttribute("data-js-theme-color"));
            SetColor();
        }
    });

    function SetColor() {
        let path = colorStyle.getAttribute("href").split("/");
        path = path.slice(0, path.length - 1);
        colorStyle.setAttribute("href", path.join("/") + "/" + localStorage.getItem("color") + ".css");
    }

    if (localStorage.getItem("color") !== null) {
        SetColor();
    }
    else {
        const defaultColor = colorStyle.getAttribute("href").split("/").pop().split(".").shift();
        document.querySelector("[data-js-theme-color=" + defaultColor + "]").classList.add("active");
    }
}
ThemeColors();



/* -----  Theme Light & Dark Mode ----- */
function ThemeLightDark() {
    const darkModeCheckBox = document.querySelector(".js-dark-mode");

    darkModeCheckBox.addEventListener("click", function () {
        if (this.checked) {
            localStorage.setItem("theme-dark", "true");
        }
        else {
            localStorage.setItem("theme-dark", "false");
        }
        ThemeMode();
    });

    function ThemeMode() {
        if (localStorage.getItem("theme-dark") === "false") {
            document.body.classList.remove("t-dark");
        }
        else {
            document.body.classList.add("t-dark");
        }
    }

    if (localStorage.getItem("theme-dark") !== null) {
        ThemeMode();
    }
    if (document.body.classList.contains("t-dark")) {
        darkModeCheckBox.checked = true;
    }
}
ThemeLightDark();



/* ---- Glass Mode ----- */
function ThemeGlassEffect() {
    const glassEffectCheckBox = document.querySelector(".js-glass-effect"),
        glassStyle = document.querySelector(".js-glass-style");

    glassEffectCheckBox.addEventListener("click", function () {
        if (this.checked) {
            localStorage.setItem("glass-effect", "true");
        }
        else {
            localStorage.setItem("glass-effect", "false");
        }
        glass();
    });

    function glass() {
        if (localStorage.getItem("glass-effect") === "true") {
            glassStyle.removeAttribute("disabled");
        }
        else {
            glassStyle.disabled = true;
        }
    }
    if (localStorage.getItem("glass-effect") !== null) {
        glass();
    }

    if (!glassStyle.hasAttribute("disabled")) {
        glassEffectCheckBox.checked = true;
    }
}
ThemeGlassEffect();



/* ----- Page Loader ----- */
window.addEventListener("load", () => {
    document.querySelector(".js-page-loader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".js-page-loader").style.display = "none";
    }, 600);
});
