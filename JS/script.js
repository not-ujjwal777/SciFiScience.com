var crsr = document.querySelector(".pc .crsr");
document.addEventListener("mousemove", function (dets) {
    gsap.to(crsr, {
        x: dets.x + 20,
        y: dets.y + 20
    })
});


var images = document.querySelectorAll("body img");
var buttons = document.querySelectorAll("body button")
var anchers = document.querySelectorAll("body a")
images.forEach(function (i) {
    i.addEventListener("mouseover", function () {
        crsr.style.width = "50px";
        crsr.style.height = "50px";
        crsr.style.background = "transparent";
        crsr.style.border = "2px solid white";
    });

    i.addEventListener("mouseleave", function () {
        crsr.style.width = "20px";
        crsr.style.height = "20px";
        crsr.style.background = "linear-gradient(#000, #fff, grey)";
        crsr.style.border = "none";
    });
});


buttons.forEach(function (i) {
    i.addEventListener("mouseover", function () {
        crsr.style.width = "50px";
        crsr.style.height = "50px";
        crsr.style.background = "transparent";
        crsr.style.border = "2px solid white";
    });

    i.addEventListener("mouseleave", function () {
        crsr.style.width = "20px";
        crsr.style.height = "20px";
        crsr.style.background = "linear-gradient(#000, #fff, grey)";
        crsr.style.border = "none";
    });
});




anchers.forEach(function (i) {
    i.addEventListener("mouseover", function () {
        crsr.style.width = "50px";
        crsr.style.height = "50px";
        crsr.style.background = "transparent";
        crsr.style.border = "2px solid white";
    });

    i.addEventListener("mouseleave", function () {
        crsr.style.width = "20px";
        crsr.style.height = "20px";
        crsr.style.background = "linear-gradient(#000, #fff, grey)";
        crsr.style.border = "none";
    });
});

function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOpen = document.getElementById('menuOpen');
    const menuClose = document.getElementById('menuClose');

    if (mobileMenu.classList.contains('hidden')) {
        // Opening menu
        mobileMenu.classList.remove('hidden');
        menuOpen.classList.add('hidden');
        menuClose.classList.remove('hidden');

        gsap.fromTo(mobileMenu, {
            opacity: 0,
            y: -20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    } else {
        // Closing menu
        gsap.to(mobileMenu, {
            opacity: 0,
            y: -20,
            duration: 0.8,
            ease: "power2.in",
            onComplete: () => {
                mobileMenu.classList.add('hidden');
                menuOpen.classList.remove('hidden');
                menuClose.classList.add('hidden');
            }
        });
    }
}

function toggleSubmenu() {
    const submenu = document.getElementById('environmentSubmenu');

    if (submenu.classList.contains('hidden')) {
        submenu.classList.remove('hidden');
        gsap.fromTo(submenu, {
            opacity: 0,
            height: 0
        }, {
            opacity: 1,
            height: "auto",
            duration: 0.8,
            ease: "power2.out"
        });
    } else {
        gsap.to(submenu, {
            opacity: 0,
            height: 0,
            duration: 0.8,
            ease: "power2.in",
            onComplete: () => {
                submenu.classList.add('hidden');
            }
        });
    }
}




gsap.to(".pc nav", {
    backgroundColor: "#a6a2a2",
    height: "12vh",
    duration: 1,
    color: "#000",
    scrollTrigger: {
        scroller: "body",
        trigger: "nav",
        // markers : true , 
        start: "top -15%",
        end: "top -16%",
        scrub: 1,
        opacity: 0
    }
});

gsap.to(".pc .main", {
    backgroundColor: "#000",
    duration: .7,
    scrollTrigger: {
        scroller: "body",
        trigger: ".main",
        start: "top -40%",
        end: "top -80%",
        scrub: 2
    }
});

Shery.makeMagnet(".exploration_img_bt , #imo_1 , #imo_2", {

    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

gsap.to(".pc .main", {
    scrollTrigger: {
        trigger: ".pc .footers",
        scroller: "body",
        scrub: 2,
        start: "top 75%",
        end: "top 80%"
    },
    backgroundColor: "#ECECEC",
});

gsap.from(".pc .footers", {
    scrollTrigger: {
        trigger: ".pc .footers",
        scroller: "body",
        scrub: 2,
        start: "top 75%",
        end: "top 80%"
    },
    opacity: 0
})

gsap.to(".page1", {
    scrollTrigger: {
        trigger: ".pc .footers",
        scroller: "body",
        scrub: 2,
        start: "top 75%",
        end: "top 80%"
    },
    opacity: 0,
    duration: .7
});

var animation = gsap.timeline();

function time() {
    var a = 0
    setInterval(function () {
        a = a + Math.floor(Math.random() * 15)
        if (a < 100) {
            document.querySelector("#loader").innerHTML = a + "%";
        }
        else {
            a = 100
            document.querySelector("#loader").innerHTML = a + "%";
        }
    }, 100)
}

time();

animation.to(".loading h1", {
    scale: 1.5,
    delay: 0.2,
    duration: 1,
    onStart: time()
})

animation.to(".loading", {
    top: "-100%",
    delay: 0.5,
    duration: 1.5
})

animation.from("nav #logo , nav a , nav .search", {
    y: -100,
    stagger: 0.1,
    duration: .7,
})

animation.from(".main .hero h1 , .main .hero h2 , .main .hero p ", {
    y: -100,
    stagger: 0.2,
    duration: .9,
    opacity: 0
})




// Mobile part

// gsap.to(".mobile .main", {
//     backgroundColor: "#000",
//     duration: .7,
//     scrollTrigger: {
//         scroller: "body",
//         trigger: ".main",
//         start: "top -35%",
//         end: "top -36%",
//         scrub: 2,
//     }
// });

// gsap.to(".mobile .hero_main_top", {
//     scrollTrigger: {
//         scroller: "body",
//         trigger: ".mobile .hero_main_top",
//         scrub: true,
//         start: "top -20%",
//         end: "top -21%"
//     },
//     opacity: 0 ,
//     // delay: 1
// });








