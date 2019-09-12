var controller = new ScrollMagic.Controller();


// hero



// build entrance tween
var tween = TweenMax.staggerFromTo("#titlechart", 2, {backgroundPosition: 'center -100px', backgroundSize: '103%'}, {backgroundPosition: 'center -150px', backgroundSize: '100%', ease: Circ.easeOut}, 0.05);

// build entrance scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger0", duration: 300})
                .setTween(tween)
                .addIndicators({name: "staggering"}) // add indicators (requires plugin)
                .addTo(controller);


// hero


// first frame
// first frame
// first frame
// first frame
// first frame


// build entrance tween
var tween = TweenMax.staggerFromTo(".animate4", 2, {top: 150, opacity: 0}, {top: 0, opacity: 1, ease: Circ.easeOut}, 0.05);

// build entrance scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger4", duration: 300})
                .setTween(tween)
                .addIndicators({name: "staggering 2"}) // add indicators (requires plugin)
                .addTo(controller);

// build exit tween
var tween = TweenMax.staggerFromTo(".animate4", 2, {top: 0, opacity: 1}, {top: -150, opacity: 0, ease: Circ.easeOut}, 0.05);

// build exit scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger42", duration: 300})
                .setTween(tween)
                // .addIndicators({name: "staggering"}) // add indicators (requires plugin)
                .addTo(controller);



// build entrance tween
var tween = TweenMax.staggerFromTo(".animate4", 2, {top: 150, opacity: 0}, {top: 0, opacity: 1, ease: Circ.easeOut}, 0.05);

// build entrance scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger4", duration: 300})
                .setTween(tween)
                //.addIndicators({name: "staggering"}) // add indicators (requires plugin)
                .addTo(controller);

// build exit tween
var tween = TweenMax.staggerFromTo(".animate4", 2, {top: 0, opacity: 1}, {top: -150, opacity: 0, ease: Circ.easeOut}, 0.05);

// build exit scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger42", duration: 300})
                .setTween(tween)
                //.addIndicators({name: "staggering"}) // add indicators (requires plugin)
                .addTo(controller);

// first frame
// first frame
// first frame
// first frame
// first frame





// second frame
// second frame
// second frame
// second frame
// second frame


// build tween

var tween = TweenMax.staggerFromTo(".animate5", 2, {scale: .75, opacity: 0}, {scale: 1, opacity: 1, ease: Circ.easeOut}, 0.15);
// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger5", duration: 300})
                .setTween(tween)
                //.addIndicators({name: "staggering"}) // add indicators (requires plugin)
                .addTo(controller);



// build entrance tween
var tween = TweenMax.staggerFromTo(".animate52", 2, {top: 100, opacity: 0}, {top: 0, opacity: 1, ease: Circ.easeOut}, 0.05);

// build entrance scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger5", duration: 300})
                .setTween(tween)
                //.addIndicators({name: "staggering"}) // add indicators (requires plugin)
                .addTo(controller);

// build exit tween
var tween = TweenMax.staggerFromTo(".animate52", 2, {top: 0, opacity: 1}, {top: -100, opacity: 0, ease: Circ.easeOut}, 0.05);

// build exit scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger52", duration: 300})
                .setTween(tween)
                //.addIndicators({name: "staggering"}) // add indicators (requires plugin)
                .addTo(controller);


// second frame
// second frame
// second frame
// second frame
// second frame







// third frame
// third frame
// third frame
// third frame
// third frame


var tween = TweenMax.staggerFromTo(".animate6", 2, {left: 50, opacity: 0}, {left:0, opacity: 1, ease: Circ.easeOut}, 0.15);
// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger6", duration: 300})
                .setTween(tween)
                //.addIndicators({name: "staggering"}) // add indicators (requires plugin)
                .addTo(controller);




// build entrance tween
var tween = TweenMax.staggerFromTo(".animate62", 2, {top: 100, opacity: 0}, {top: 0, opacity: 1, ease: Circ.easeOut}, 0.05);

// build entrance scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger6", duration: 300})
                .setTween(tween)
                //.addIndicators({name: "staggering"}) // add indicators (requires plugin)
                .addTo(controller);

// build exit tween
var tween = TweenMax.staggerFromTo(".animate62", 2, {top: 0, opacity: 1}, {top: -100, opacity: 0, ease: Circ.easeOut}, 0.05);

// build exit scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger62", duration: 300})
                .setTween(tween)
                //.addIndicators({name: "staggering"}) // add indicators (requires plugin)
                .addTo(controller);




// third frame
// third frame
// third frame
// third frame
// third frame





// fourth frame
// fourth frame
// fourth frame
// fourth frame
// fourth frame



// build tween

var tween = TweenMax.from(".animate7", 2, {top: 200, opacity: 0, fontSize: '150px'}, {top:0, opacity: 1, ease: Circ.easeOut}, 0.15);
// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger7", duration: 300})
                .setTween(tween)
                //.addIndicators({name: "staggering"}) // add indicators (requires plugin)
                .addTo(controller);




                // build entrance tween
var tween = TweenMax.staggerFromTo(".animate72", 2, {top: 100, opacity: 0}, {top: 0, opacity: 1, ease: Circ.easeOut}, 0.05);

// build entrance scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger7", duration: 300})
                .setTween(tween)
                //.addIndicators({name: "staggering"}) // add indicators (requires plugin)
                .addTo(controller);

// build exit tween
var tween = TweenMax.staggerFromTo(".animate72", 2, {top: 0, opacity: 1}, {top: -100, opacity: 0, ease: Circ.easeOut}, 0.05);

// build exit scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger72", duration: 300})
                .setTween(tween)
                //.addIndicators({name: "staggering"}) // add indicators (requires plugin)
                .addTo(controller);


// fourth frame
// fourth frame
// fourth frame
// fourth frame
// fourth frame







// fifth frame
// fifth frame
// fifth frame
// fifth frame
// fifth frame



// build tween




var tween = TweenMax.staggerFromTo(".animate8", 2, {top: 100, opacity: 0}, {top:0, opacity: 1, ease: Expo.easeOut}, 0);
// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger8", duration: 300})
                .setTween(tween)
                //.addIndicators({name: "staggering"}) // add indicators (requires plugin)
                .addTo(controller);

var tween = TweenMax.staggerFromTo(".animate9", 2, {top: -100, opacity: 0}, {top:0, opacity: 1, ease: Expo.easeOut}, 0);
var scene = new ScrollMagic.Scene({triggerElement: "#trigger8", duration: 300})
                .setTween(tween)
                //.addIndicators({name: "staggering"}) // add indicators (requires plugin)
                .addTo(controller);






                // build entrance tween
                var tween = TweenMax.staggerFromTo(".animate82", 2, {top: 100, opacity: 0}, {top: 0, opacity: 1, ease: Circ.easeOut}, 0.05);

                // build entrance scene
                var scene = new ScrollMagic.Scene({triggerElement: "#trigger8", duration: 300})
                                .setTween(tween)
                                //.addIndicators({name: "staggering"}) // add indicators (requires plugin)
                                .addTo(controller);
                




// fifth frame
// fifth frame
// fifth frame
// fifth frame
// fifth frame