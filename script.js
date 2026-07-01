const darkButton = document.getElementById("darkMode");

darkButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});
