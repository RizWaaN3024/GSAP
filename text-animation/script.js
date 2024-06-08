var h1 = document.querySelector('h1');
var h1Text = h1.textContent;

var splittedText = h1Text.split("");
 var halfText = splittedText.length/2;
 console.log(halfText);

var clutter = "";

splittedText.forEach(function(e, id) {
    console.log(id)
    if (id < halfText) {
        clutter = clutter + `<span class='a'>${e}</span>`;
    } else {
        clutter = clutter + `<span class='b'>${e}</span>`;
    }
    
})
console.log(clutter);
h1.innerHTML = clutter;

gsap.from('.a', {
    y:100,
    duration:0.3,
    delay:1,
    opacity: 0,
    stagger: 0.2
})
gsap.from('.b', {
    y:100,
    duration:0.3,
    delay:1,
    opacity: 0,
    stagger: -0.2
})