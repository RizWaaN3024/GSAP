gsap.from("#page1 .box", {
    scale: 2,
    duration: 2,
    delay: 1,
    rotate: 360,
    opacity: 0
})
gsap.from('#page2 .box', {
    scale: 2,
    duration: 2,
    delay: 1,
    rotate: 360,
    opacity: 0,
    scrollTrigger: {
        trigger: '#page2 .box',
        markers: true
    }
})