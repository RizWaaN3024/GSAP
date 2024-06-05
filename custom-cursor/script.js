var main = document.querySelector('.main');
var cursor = document.querySelector('.cursor');

main.addEventListener('mousemove', function(dets) {
    console.log(dets);
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        ease:'back.out'
    })
})