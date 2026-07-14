// ================================
// Smooth Scroll
// ================================
function scrollNext() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });
}

// ================================
// Typewriter Effect
// ================================
const letter = document.getElementById("typewriter");

const message = `Happy Birthday, Shikha! ❤️

Every day with you is a blessing, and today I celebrate the amazing person you are.

Thank you for filling my life with love, happiness, and countless beautiful memories.

I wish you endless joy, good health, success, and all the love your heart can hold.

May every dream you have come true.

I promise to keep making you smile and stand by your side through every chapter of life.

I love you more than words can express.

Happy Birthday, my forever favorite person.

❤️🎂🎉💖`;

letter.innerHTML = "";

let i = 0;

function typeWriter() {

    if (i < message.length) {

        letter.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter, 35);

    }

}

window.addEventListener("load", typeWriter);

// ================================
// Surprise Button
// ================================
function showSurprise() {

    document.getElementById("surprise").style.display = "block";

    launchConfetti();

}

// ================================
// Music Controls
// ================================
const music = document.getElementById("bgMusic");

function playMusic() {
    music.play();
}

function pauseMusic() {
    music.pause();
}

function toggleMute() {
    music.muted = !music.muted;
}

// ================================
// Love Quotes
// ================================
const quotes = [

"You are my today and all of my tomorrows. ❤️",

"My favorite place is beside you. 💖",

"You make ordinary moments magical. ✨",

"I fall in love with you every single day. 🌹",

"You are my sunshine on every cloudy day. ☀️",

"Forever isn't enough with you. ❤️"

];

let quoteIndex = 0;

setInterval(() => {

    quoteIndex++;

    if (quoteIndex >= quotes.length)
        quoteIndex = 0;

    document.getElementById("quote").innerHTML = quotes[quoteIndex];

}, 4000);

// ================================
// Floating Hearts on Click
// ================================
document.addEventListener("click", function(e) {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = e.pageX + "px";

    heart.style.top = e.pageY + "px";

    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 4000);

});

// ================================
// Confetti
// ================================
function launchConfetti() {

    for (let i = 0; i < 180; i++) {

        const confetti = document.createElement("div");

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.top = "-20px";

        confetti.style.width = "10px";
        confetti.style.height = "10px";

        const colors = [
            "#ff4d88",
            "#ffd700",
            "#ffffff",
            "#87cefa",
            "#ff69b4",
            "#ff1493"
        ];

        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.borderRadius = "50%";

        confetti.style.zIndex = "99999";

        document.body.appendChild(confetti);

        const duration = 3000 + Math.random() * 3000;

        confetti.animate([

            {
                transform: "translateY(0) rotate(0deg)",
                opacity: 1
            },

            {
                transform:
                `translate(${Math.random()*400-200}px,
                ${window.innerHeight+200}px)
                rotate(${Math.random()*720}deg)`,

                opacity: 0

            }

        ], {

            duration: duration,

            easing: "ease-out"

        });

        setTimeout(() => {

            confetti.remove();

        }, duration);

    }

}

// ================================
// Fireworks
// ================================
function firework(x, y) {

    for (let i = 0; i < 40; i++) {

        const spark = document.createElement("div");

        spark.style.position = "fixed";
        spark.style.left = x + "px";
        spark.style.top = y + "px";

        spark.style.width = "6px";
        spark.style.height = "6px";

        spark.style.borderRadius = "50%";

        spark.style.background =
        `hsl(${Math.random()*360},100%,60%)`;

        spark.style.zIndex = "99999";

        document.body.appendChild(spark);

        const angle = Math.random() * Math.PI * 2;

        const distance = 150 + Math.random() * 120;

        spark.animate([

            {
                transform: "translate(0,0)",
                opacity: 1
            },

            {
                transform:
                `translate(
                ${Math.cos(angle)*distance}px,
                ${Math.sin(angle)*distance}px
                )`,
                opacity: 0
            }

        ], {

            duration: 1800

        });

        setTimeout(() => {

            spark.remove();

        }, 1800);

    }

}

// ================================
// Welcome Fireworks
// ================================
window.onload = function() {

    typeWriter();

    setTimeout(() => {

        firework(
            window.innerWidth / 2,
            window.innerHeight / 3
        );

        launchConfetti();

    }, 700);

};

// ================================
// Floating Sparkles
// ================================
setInterval(() => {

    const star = document.createElement("div");

    star.innerHTML = "✨";

    star.style.position = "fixed";

    star.style.left =
        Math.random() * window.innerWidth + "px";

    star.style.top =
        window.innerHeight + "px";

    star.style.fontSize =
        (12 + Math.random() * 18) + "px";

    star.style.pointerEvents = "none";

    star.style.zIndex = "9999";

    document.body.appendChild(star);

    star.animate([

        {
            transform: "translateY(0)",
            opacity: 1
        },

        {
            transform:
            `translateY(-${window.innerHeight+150}px)`,

            opacity: 0

        }

    ], {

        duration: 7000

    });

    setTimeout(() => {

        star.remove();

    }, 7000);

}, 400);

// ================================
// Auto Play Music (if browser allows)
// ================================
window.addEventListener("click", function() {

    music.play().catch(() => {});

}, { once: true });
