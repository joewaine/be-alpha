// fifth frame
// fifth frame
// fifth frame
// fifth frame
// fifth frame



// build entrance tween
var tween = TweenMax.staggerFromTo(".animate_t_5", 2, {transform: "scale(.0)", opacity: 0}, {transform: "scale(1)", opacity: 1, ease: Circ.easeOut}, 0.05);

// build entrance scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger_5_in", duration: 300})
                .setTween(tween)
                // .addIndicators({name: "staggering 2"}) // add indicators (requires plugin)
                .addTo(controller);


// build entrance tween
var tween = TweenMax.staggerFromTo(".animate_c_5", 2, {transform: "translateY(150px)", opacity: 0}, {transform: "translateY(0)", opacity: 1, ease: Circ.easeOut}, 0.05);

// build entrance scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger_5_in_content", duration: 300})
                .setTween(tween)
                // .addIndicators({name: "staggering 2"}) // add indicators (requires plugin)
                .addTo(controller);


// build exit tween
var tween = TweenMax.fromTo(".animate_t_5", 2, {transform: "translateY(0px)", opacity: 1}, {transform: "translateY(-150px)", opacity: 0, ease: Circ.easeOut}, 0.05);

// build exit scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger_5_out", duration: 300})
                .setTween(tween)
                // // .addIndicators({name: "staggering"}) // add indicators (requires plugin)
                .addTo(controller);



// build exit tween
var tween = TweenMax.staggerFromTo(".animate_c_5", 2, {top: 0, opacity: 1}, {top: -150, opacity: 0, ease: Circ.easeOut}, 0.05);

// build exit scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger_5_out", duration: 300})
                .setTween(tween)
                // // .addIndicators({name: "staggering"}) // add indicators (requires plugin)
                .addTo(controller);


// fifth frame
// fifth frame
// fifth frame
// fifth frame
// fifth frame