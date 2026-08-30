/* =========================================================
   SPRACHE UND KULTUR ENTDECKEN
   Main Website JavaScript
========================================================= */


/* =========================
   DARK MODE
========================= */

const darkButton = document.getElementById("darkMode");

function updateDarkModeButton(){

    if(!darkButton) return;

    const darkEnabled =
        document.body.classList.contains("dark");

    darkButton.textContent =
        darkEnabled ? "☀️" : "🌙";

    darkButton.setAttribute(
        "aria-label",
        darkEnabled
            ? "Hellmodus aktivieren"
            : "Dunkelmodus aktivieren"
    );

    darkButton.setAttribute(
        "title",
        darkEnabled
            ? "Hellmodus"
            : "Dunkelmodus"
    );
}


/* Load saved mode */

const savedMode =
    localStorage.getItem("darkMode");

if(savedMode === "enabled"){

    document.body.classList.add("dark");

}

updateDarkModeButton();


/* Toggle */

if(darkButton){

    darkButton.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const enabled =
            document.body.classList.contains("dark");

        localStorage.setItem(
            "darkMode",
            enabled ? "enabled" : "disabled"
        );

        updateDarkModeButton();

    });

}


/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(event){

        const targetId =
            this.getAttribute("href");

        /* Ignore empty # links */

        if(
            !targetId ||
            targetId === "#"
        ){
            return;
        }

        const target =
            document.querySelector(targetId);

        if(target){

            event.preventDefault();

            target.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });

        }

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


if("IntersectionObserver" in window){

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if(entry.isIntersecting){

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold:0.12,
                rootMargin:"0px 0px -40px 0px"
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

}else{

    revealElements.forEach(element => {

        element.classList.add("visible");

    });

}


/* =========================
   BACK TO TOP
========================= */

const topBtn =
    document.getElementById("topBtn");


if(topBtn){

    function updateTopButton(){

        if(window.scrollY > 500){

            topBtn.classList.add("show");

        }else{

            topBtn.classList.remove("show");

        }

    }


    window.addEventListener(
        "scroll",
        updateTopButton,
        { passive:true }
    );


    topBtn.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top:0,
                behavior:"smooth"
            });

        }
    );

}


/* =========================
   HEADER SHADOW
========================= */

const header =
    document.querySelector("header");


if(header){

    function updateHeader(){

        if(window.scrollY > 30){

            header.style.boxShadow =
                "0 8px 25px rgba(0,0,0,.12)";

        }else{

            header.style.boxShadow =
                "none";

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive:true }
    );

    updateHeader();

}


/* =========================
   CURRENT YEAR
========================= */

const yearElements =
    document.querySelectorAll(
        "[data-current-year]"
    );

yearElements.forEach(element => {

    element.textContent =
        new Date().getFullYear();

});
