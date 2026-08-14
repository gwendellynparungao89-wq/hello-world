/* =========================================
   OPEN WEBSITE
========================================= */

const openButton =
    document.getElementById("openButton");

const opening =
    document.getElementById("opening");

const website =
    document.getElementById("website");


openButton.addEventListener("click", function () {

    opening.style.display = "none";

    website.classList.add("show");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});



/* =========================================
   FLOATING HEARTS
========================================= */

const hearts =
    document.getElementById("hearts");


function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML =
        Math.random() > 0.5
            ? "♡"
            : "♥";


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";


    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";


    heart.style.color =
        Math.random() > 0.5
            ? "#c084fc"
            : "#7dd3fc";


    hearts.appendChild(heart);


    setTimeout(function () {

        heart.remove();

    }, 8000);

}


setInterval(createHeart, 700);



/* =========================================
   LOVE BUTTON
========================================= */

const loveButton =
    document.getElementById("loveButton");

const loveMessage =
    document.getElementById("loveMessage");


loveButton.addEventListener("click", function () {

    loveMessage.innerHTML =
        "I KNEW IT 😭💜 I LOVE YOU MORE ♡";

    for (let i = 0; i < 8; i++) {
        createHeart();
    }

});



/* =========================================
   LETTER
========================================= */

const letterButton =
    document.getElementById("letterButton");

const letter =
    document.getElementById("letter");


letterButton.addEventListener("click", function () {

    letter.classList.toggle("hidden");


    if (!letter.classList.contains("hidden")) {

        letterButton.querySelector("strong").innerText =
            "Close this, bubba ♡";

    } else {

        letterButton.querySelector("strong").innerText =
            "Open this, bubba";

    }

});



/* =========================================
   MUSIC
========================================= */

const musicPlayer =
    document.getElementById("musicPlayer");

const musicButtons =
    document.querySelectorAll(".music-button");


let currentlyPlaying = null;



musicButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const song =
            this.dataset.song;


        /* If this same song is playing,
           pause it */

        if (
            currentlyPlaying === this &&
            !musicPlayer.paused
        ) {

            musicPlayer.pause();

            this.classList.remove("playing");

            return;
        }



        /* Stop all other songs */

        musicButtons.forEach(function (otherButton) {

            otherButton.classList.remove("playing");

        });



        /* Load selected song */

        musicPlayer.src = song;


        musicPlayer.play()
            .then(function () {

                console.log(
                    "Playing:",
                    song
                );

            })
            .catch(function (error) {

                console.log(
                    "Music could not play:",
                    error
                );

            });


        this.classList.add("playing");

        currentlyPlaying = this;

    });

});



/* Remove glow when song ends */

musicPlayer.addEventListener(
    "ended",
    function () {

        if (currentlyPlaying) {

            currentlyPlaying
                .classList
                .remove("playing");

        }

        currentlyPlaying = null;

    }
);