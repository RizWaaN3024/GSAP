gsap.to('.page2 > h1', {
    transform: 'translateX(-180%)',
    scrollTrigger: {
        trigger: '.page2',
        scroller:'body',
        start: 'top 0%',
        end: 'top -170%',
        scrub: 2,
        pin: true
    }
})
gsap.from('nav', {
    opacity: 0,
    duration: 1,
    delay: 1,
})
gsap.from('.heading > h1', {
    scale: 0,
    duration: 2,
    delay: 1,
})
const tl = gsap.timeline();
tl.from('span', {
    opacity:0,
    duration:2,
    delay: 0.5,
    stagger: 0.5,
})

var body = document.querySelector('.page1');
var cursor = document.querySelector('.cursor');

body.addEventListener('mousemove', function(dets) {
    gsap.to(cursor,{
        x: dets.x,
        y:dets.y,
        ease: 'back.out'
    })
})