var tl = gsap.timeline();

tl.pause();

tl.to('.nav-box', {
    height: '30%',
    duration: 0.4,
    ease: 'power3.out'
})

var navItems = document.querySelectorAll('h2');
var navBox = document.querySelector('.nav-box');
var isAnimationPlaying = false; 

navItems.forEach(function(navItem) {
    navItem.addEventListener('mouseenter', function() {
        if (!isAnimationPlaying) {
            tl.play();
            isAnimationPlaying = !isAnimationPlaying;
        }
    });

    navItem.addEventListener('click', function() {
        if (!isAnimationPlaying) {
            tl.play();
            isAnimationPlaying = true; // Update animation state
        } else {
            tl.reverse();
            isAnimationPlaying = false; // Update animation state
        }
    });
});



navBox.addEventListener('mouseleave', function() {
    tl.reverse();
})