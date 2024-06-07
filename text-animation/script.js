var h1 = document.querySelector('h1');
var h1Text = h1.textContent;

var splittedText = h1Text.split("");

var clutter = "";

splittedText.forEach(function(e) {
    clutter = clutter + `<span>${e}</span>`
})
h1.innerHTML = clutter;

gsap.from('span', {
    y:100,
    duration:1,
    delay:1,
    opacity: 0,
    stagger: 0.2
})