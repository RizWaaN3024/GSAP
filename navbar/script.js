var tl = gsap.timeline();

tl.to('.mobile-nav', {
    right: 0,
    duration: 0.2,
    delay: 0.1
})

tl.from('.nav-items h2', {
    x:100,
    duration: 0.2,
    stagger: 0.2,
    opacity: 0
})
tl.from('.mobile-nav i', {
    opacity:0,
})
tl.pause();
var ham = document.querySelector('.nav i');
var close = document.querySelector('.mobile-nav i');

ham.addEventListener('click', function() {
    tl.play();
})
close.addEventListener('click', function() {
    tl.reverse();
})