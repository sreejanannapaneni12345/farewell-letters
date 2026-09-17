/* =========================================
   FAREWELL WEBSITE
   Created with gratitude by Sreeja
========================================= */


/* =========================================
   LETTER CONTENT
========================================= */

const people = {


    /* =====================================
       BEN
    ====================================== */

    ben: {

        name: "Dear Ben,",

        message: `

            <p>
                I write this with so much gratitude
                and respect for you. I am incredibly
                grateful to have been a part of GRO.
                I've had so many opportunities to
                learn, improve, and grow through the
                nature of work we've embraced as a team.
            </p>

            <p>
                I admire your constant curiosity to
                explore advancements in technology
                and the way you encourage new ideas,
                no matter how small they may seem.
                You've given me many opportunities
                to explore solutions that not only
                helped me learn but also brought value
                to the team.
            </p>

            <p>
                Having a leader who chooses to be a
                torchbearer for such advancements can
                only benefit a team, and I believe that
                has been clearly visible under your
                leadership.
            </p>

            <p>
                Thank you for always being open to
                ideas, for hearing me out, and for
                believing in me. I won't consider this
                a goodbye message, but a
                <strong>BRB!!</strong>
            </p>

            <p>
                I wish you the very best, and I hope
                our paths cross again in the future.
            </p>

        `
    },


    /* =====================================
       RAFAEL
    ====================================== */

    rafael: {

        name: "Dear Rafa,",

        message: `

            <p>
                No matter how many times I say this,
                I still never run out of words to
                express how your kindness and warmth
                touch the people around you.
            </p>

            <p>
                You are an amazing human being and
                a truly kind soul. Working with you
                has given me so much support. Thank
                you for having my back countless times.
                The additional time you've invested in
                helping me sort through my problems is
                something I genuinely value and
                appreciate.
            </p>

            <p>
                I also admire your knack for
                development and your keen attention
                to detail. I would always choose you
                as my leader at any point in time.
            </p>

            <p>
                Once again, thank you for everything,
                Rafa!!
            </p>

        `
    },


    /* =====================================
       SIRISHA
    ====================================== */

    sirisha: {

        name: "Dear Sirisha,",

        message: `

            <p>
                <strong>
                    "COOLEST PERSON"
                </strong>
                is what I think whenever I'm
                working with you.
            </p>

            <p>
                I've learned so much from you over
                the last couple of years. You are
                incredibly humble, and you always
                give people the space to explore.
               
            </p>

            <p>
                I've always felt relaxed
                troubleshooting with you, no matter
                how big the issue is. I think that
                comes from your calm and composed
                approach to problems. You are the
                kind of calm in the storm that anyone
                would want by their side.
            </p>

            <p>
                It has been a great opportunity to
                collaborate with you on several
                projects, and I'll carry the knowledge
                and experiences I gained with me
                forever.
            </p>

            <p>
                Thank you, Sirisha.
            </p>

        `
    },


    /* =====================================
       SHRUTI
    ====================================== */

    shruti: {

        name: "Dear Shruti,",

        message: `

            <p>
                Thank you for all the collaboration
                that gave me the opportunity to
                explore my abilities.
            </p>

            <p>
                I really appreciate your calm
                approach while navigating between
                teams. I've always felt at peace
                working with you, knowing how calmly
                and thoughtfully you carry the process
                forward.
            </p>

            <p>
                Thank you again for everything,
                Shruti. It has been wonderful working
                with you!
            </p>

        `
    },


    /* =====================================
       SARAH
    ====================================== */

    sarah: {

        name: "Dear Sarah,",

        message: `

            <p>
                I'm really glad I had the opportunity
                to meet you in person and see
                firsthand how great you are at
                bringing so much strength to the
                organization.
            </p>

            <p>
                I do wish we had more time together,
                but there's always tomorrow to look
                forward to and hope for more
                opportunities to cross paths.
            </p>

            <p>
                You have such a humble and polite
                approach toward work, and that is
                something I've learned from you every
                time we've interacted.
            </p>

            <p>
                I hope our paths cross again in
                the future.
            </p>

            <p>
                Thank you for everything, Sarah!
            </p>

        `
    }

};


/* =========================================
   GOLD SPARKLES
========================================= */

const sparkleContainer =
    document.getElementById("sparkles");


const sparkleCount = 55;


for (
    let i = 0;
    i < sparkleCount;
    i++
) {

    const sparkle =
        document.createElement("div");


    sparkle.classList.add("sparkle");


    sparkle.style.left =
        Math.random() * 100 + "%";


    sparkle.style.animationDuration =
        (5 + Math.random() * 8) + "s";


    sparkle.style.animationDelay =
        (-Math.random() * 10) + "s";


    sparkle.style.opacity =
        0.2 + Math.random() * 0.8;


    const size =
        2 + Math.random() * 4;


    sparkle.style.width =
        size + "px";


    sparkle.style.height =
        size + "px";


    sparkleContainer.appendChild(
        sparkle
    );

}


/* =========================================
   CONFETTI
========================================= */

const confettiContainer =
    document.getElementById("confetti");


function celebrate() {


    const colors = [

        "#D4AF37",

        "#F3D675",

        "#FFF1B8",

        "#FFFFFF",

        "#C49A28"

    ];


    const confettiCount = 80;


    for (
        let i = 0;
        i < confettiCount;
        i++
    ) {


        const piece =
            document.createElement("div");


        piece.classList.add(
            "confetti-piece"
        );


        piece.style.left =
            Math.random() * 100 + "%";


        piece.style.backgroundColor =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        piece.style.animationDelay =
            Math.random() * 0.5 + "s";


        piece.style.animationDuration =
            (2.5 + Math.random() * 2) + "s";


        piece.style.setProperty(

            "--drift",

            (-150 +
                Math.random() * 300) +
                "px"

        );


        piece.style.width =
            (4 + Math.random() * 6) + "px";


        piece.style.height =
            (7 + Math.random() * 9) + "px";


        confettiContainer.appendChild(
            piece
        );


        setTimeout(() => {

            piece.remove();

        }, 5000);

    }

}


/* =========================================
   LETTER MODAL
========================================= */

const modal =
    document.getElementById(
        "letterModal"
    );


const letterTo =
    document.getElementById(
        "letterTo"
    );


const letterMessage =
    document.getElementById(
        "letterMessage"
    );


const closeLetter =
    document.getElementById(
        "closeLetter"
    );


/* =========================================
   OPEN LETTER
========================================= */

document
    .querySelectorAll(".letter")
    .forEach(letter => {


        letter.addEventListener(
            "click",
            () => {


                const person =
                    letter.dataset.person;


                const data =
                    people[person];


                if (!data) return;


                letterTo.innerHTML =
                    data.name;


                letterMessage.innerHTML =
                    data.message;


                modal.classList.add(
                    "active"
                );


                modal.setAttribute(
                    "aria-hidden",
                    "false"
                );


                document.body.style.overflow =
                    "hidden";


                /* Celebration */

                celebrate();

            }

        );

    });


/* =========================================
   CLOSE LETTER
========================================= */

function closeModal() {


    modal.classList.remove(
        "active"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}


/* CLOSE BUTTON */

closeLetter.addEventListener(
    "click",
    closeModal
);


/* CLICK OUTSIDE LETTER */

document
    .querySelector(".modal-backdrop")
    .addEventListener(
        "click",
        closeModal
    );


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);
