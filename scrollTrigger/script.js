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
        markers: true,
        scroller: "body",
        start: 'top 60%'
    }
})
gsap.from("#page3 h1", {
    x: 500,
    opacity: 0,
    duration: 1, 
    delay: 1,
    scrollTrigger: {
        trigger: "#page3 h1",
        start: "top 50%",
        scroller: "body",
        markers: true
    }
})

gsap.from("#page3 h2", {
    x: -500,
    opacity: 0,
    duration: 1, 
    delay: 1,
    scrollTrigger: {
        trigger: "#page3 h2",
        scroller: "body",
    }

})