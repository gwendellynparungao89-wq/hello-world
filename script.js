/* =========================================
   OPENING BUTTON
========================================= */

const openButton =
    document.getElementById("openButton");


const opening =
    document.getElementById("opening");


const website =
    document.getElementById("website");


openButton.addEventListener("click", function () {

    opening.style.transition =
        "opacity 0.8s ease";


    opening.style.opacity = "0";


    setTimeout(function () {

        opening.style.display = "none";


        website.classList.add("show");


        heartBurst(30);

    }, 800);

});



/* =========================================
   FLOATING HEARTS
========================================= */

const hearts =
    document.getElementById("hearts");


const heartSymbols = [
    "♡",
    "♥",
    "💜",
    "💙"
];


function createHeart() {

    const heart =
        document.createElement("div");


    heart.classList.add(
        "floating-heart"
    );


    heart.innerText =
        heartSymbols[
            Math.floor(
                Math.random() *
                heartSymbols.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        12 + Math.random() * 20 + "px";


    heart.style.animationDuration =
        4 + Math.random() * 5 + "s";


    hearts.appendChild(heart);


    setTimeout(function () {

        heart.remove();

    }, 10000);

}


setInterval(
    createHeart,
    600
);



/* =========================================
   HEART BURST
========================================= */

function heartBurst(amount) {

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const heart =
            document.createElement("div");


        heart.classList.add(
            "floating-heart"
        );


        heart.innerText =
            Math.random() > 0.5
                ? "💜"
                : "💙";


        heart.style.left =
            40 + Math.random() * 20 + "vw";


        heart.style.bottom =
            40 + Math.random() * 20 + "vh";


        heart.style.fontSize =
            15 + Math.random() * 25 + "px";


        heart.style.animationDuration =
            2 + Math.random() * 2 + "s";


        hearts.appendChild(heart);


        setTimeout(function () {

            heart.remove();

        }, 5000);

    }

}



/* =========================================
   LOVE BUTTON
========================================= */

const loveButton =
    document.getElementById(
        "loveButton"
    );


const loveMessage =
    document.getElementById(
        "loveMessage"
    );


loveButton.addEventListener(
    "click",
    function () {

        loveMessage.innerText =
            "CORRECT ANSWER. YOU WIN. 🏆💜💙";


        heartBurst(25);


        loveButton.innerText =
            "I KNEW IT 😭💜";

    }
);



/* =========================================
   LETTER BUTTON
========================================= */

const letterButton =
    document.getElementById(
        "letterButton"
    );


const letter =
    document.getElementById(
        "letter"
    );


letterButton.addEventListener(
    "click",
    function () {

        letter.classList.toggle(
            "hidden"
        );


        if (
            !letter.classList.contains(
                "hidden"
            )
        ) {

            letterButton
                .querySelector("strong")
                .innerText =
                "♡ For my Yuna ♡";


            letterButton
                .querySelector("small")
                .innerText =
                "take your time reading this, bubba";


            heartBurst(20);


            setTimeout(
                function () {

                    letter.scrollIntoView({
                        behavior: "smooth"
                    });

                },
                200
            );

        }

    }
);



// =========================
// MUSIC BUTTONS
// =========================

const musicPlayer = document.getElementById("musicPlayer");
const musicButtons = document.querySelectorAll(".music-button");

let currentlyPlaying = null;

musicButtons.forEach(button => {

    button.addEventListener("click", function () {

        const song = this.dataset.song;

        // If clicking the currently playing song
        if (currentlyPlaying === this && !musicPlayer.paused) {

            musicPlayer.pause();

            this.classList.remove("playing");

            return;
        }


        // Stop the previous song
        musicButtons.forEach(btn => {
            btn.classList.remove("playing");
        });


        // Load the new song
        musicPlayer.src = song;

        musicPlayer.play();

        this.classList.add("playing");

        currentlyPlaying = this;

    });

});


// Remove the glowing effect when the song ends

musicPlayer.addEventListener("ended", function () {

    if (currentlyPlaying) {
        currentlyPlaying.classList.remove("playing");
    }

    currentlyPlaying = null;

});
