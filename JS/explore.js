Shery.textAnimate(".header", {
	style: 2,
	y: 10,
	delay: 0.2,
	duration: 2,
	ease: "cubic-bezier(0.23, 1, 0.320, 1)",
	multiplier: 0.1,
});

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();


// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);


document.addEventListener('DOMContentLoaded', function () {
	const mobileMenu = document.getElementById('mobileMenu');
	const menuOpen = document.getElementById('menuOpen');
	const menuClose = document.getElementById('menuClose');

	// Initial state
	menuOpen.classList.remove('hidden');
	menuClose.classList.add('hidden');
	mobileMenu.classList.add('hidden');

	// Toggle menu function
	window.toggleMenu = function () {
		if (mobileMenu.classList.contains('hidden')) {
			// Opening menu
			mobileMenu.classList.remove('hidden');
			menuOpen.classList.add('hidden');
			menuClose.classList.remove('hidden');

			// Animation for opening
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
	};

	// Add click event listener to menuClose button
	menuClose.addEventListener('click', toggleMenu);
});

Shery.imageMasker("#wcon3", {
	mouseFollower: true,
	text: "Save Water",
	ease: "cubic-bezier(0.23, 1, 0.320, 1)",
	duration: 2,
});
Shery.imageMasker("#wcenter", {
	//Parameters are optional.
	mouseFollower: true,
	text: "Save Water",
	ease: "cubic-bezier(0.23, 1, 0.320, 1)",
	duration: 2,
});
Shery.imageMasker("#our_wcn", {
	//Parameters are optional.
	mouseFollower: true,
	text: "Save Water",
	ease: "cubic-bezier(0.23, 1, 0.320, 1)",
	duration: 2,
});

//   Environment

Shery.imageMasker("#center", {
	//Parameters are optional.
	mouseFollower: true,
	text: "Save Environment",
	ease: "cubic-bezier(0.23, 1, 0.320, 1)",
	duration: 2,
});
Shery.imageMasker("#en_left_img", {

	mouseFollower: true,
	text: "Save Environment",
	ease: "cubic-bezier(0.23, 1, 0.320, 1)",
	duration: 2,
});
Shery.imageMasker("#our_env", {
	mouseFollower: true,
	text: "Save Environment",
	ease: "cubic-bezier(0.23, 1, 0.320, 1)",
	duration: 2,
});

Shery.mouseFollower({
	//Parameters are optional.
	skew: true,
	ease: "cubic-bezier(0.23, 1, 0.320, 1)",
	duration: 1
});

// Shery.makeMagnet(".btn", {
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1
// });


Shery.makeMagnet("img", {
	ease: "cubic-bezier(0.23, 1, 0.320, 1)",
	duration: 1,
});

Shery.imageMasker(".gb_warming img", {
	mouseFollower: true,
	text: "Save Earth",
	ease: "cubic-bezier(0.23, 1, 0.320, 1)",
	duration: 2,
});

var menu = document.querySelector(".mobile nav .menu .ri-menu-2-fill");
var sliding = document.querySelector(".mobile nav .menu .silding_menu");
var close = document.querySelector(".mobile nav .menu #close");
function menuclick() {
	menu.addEventListener("click", function () {
		sliding.style.display = "block";
		close.style.display = "block";
		menu.style.display = "none";
	});
	close.addEventListener("click", function () {
		sliding.style.display = "none";
		menu.style.display = "block";
		close.style.display = "none";
	});
	sliding.style.transitionDuration = "1s";
	sliding.style.transitionProperty = "all ";
};


function menu() {

}



