gsap.to('#box1',{
    x:1000,
    duration: 3,
    delay: 1,
    rotate: 360,
    backgroundColor: 'green',
    borderRadius: "50%",
    repeat : 1,
    yoyo: true
})
gsap.from('h1', {
    y: 100,
    duration:3,
    delay: 1,
    opacity: 0,
    stagger: 0.5,
    repeat: 1,
})
// repeat: -1 (infinite)
// stagger one by one
// yoyo: animate and then come back to the initial position, works only in conjunction to the repeat property

gsap.to('#box2', {
    x: 500,
    y: 500,
    duration: 3,
    delay: 1
})

// gsap.from('#box1', {
//     x: 1000,
//     duration: 3,
//     delay: 1
// })
var timeLine = gsap.timeline();

timeLine.from('h2', {
    y:-20,
    duration:0.5,
    delay:0.5,
    opacity: 0
})
timeLine.from('h4', {
    y: -20,
    duration: 0.5,
    delay: 0.5,
    opacity: 0,
    stagger: 0.5
})
timeLine.from('#heading', {
    y: -20,
    duration: 0.5,
    delay: 0.5,
    opacity: 0,
    scale: 0.5
})