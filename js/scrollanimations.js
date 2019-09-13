var controller = new ScrollMagic.Controller();


// hero



// build entrance tween
var tween = TweenMax.staggerFromTo("#titlechart", 2, {backgroundPosition: 'center -100px', backgroundSize: '103%'}, {backgroundPosition: 'center -150px', backgroundSize: '100%', ease: Circ.easeOut}, 0.05);

// build entrance scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger_1_in", duration: 300})
                .setTween(tween)
                // .addIndicators({name: "staggering"}) // add indicators (requires plugin)
                .addTo(controller);


// hero


// first frame
// first frame
// first frame
// first frame
// first frame


// build entrance tween
var tween = TweenMax.staggerFromTo(".animate_t_1", 2, {transform: "translateY(150px)", opacity: 0}, {transform: "translateY(0)", opacity: 1, ease: Circ.easeOut}, 0.05);

// build entrance scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger_1_in", duration: 300})
                .setTween(tween)
                // .addIndicators({name: "staggering 2"}) // add indicators (requires plugin)
                .addTo(controller);


// build entrance tween
var tween = TweenMax.staggerFromTo(".animate_c_1", 2, {transform: "translateY(150px)", opacity: 0}, {transform: "translateY(0)", opacity: 1, ease: Circ.easeOut}, 0.05);

// build entrance scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger_1_in", duration: 300})
                .setTween(tween)
                // .addIndicators({name: "staggering 2"}) // add indicators (requires plugin)
                .addTo(controller);


// build exit tween
var tween = TweenMax.fromTo(".animate_t_1", 2, {transform: "translateY(0px)", opacity: 1}, {transform: "translateY(-150px)", opacity: 0, ease: Circ.easeOut}, 0.05);

// build exit scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger_1_out", duration: 300})
                .setTween(tween)
                // // .addIndicators({name: "staggering"}) // add indicators (requires plugin)
                .addTo(controller);



// build exit tween
var tween = TweenMax.staggerFromTo(".animate_c_1", 2, {top: 0, opacity: 1}, {top: -150, opacity: 0, ease: Circ.easeOut}, 0.05);

// build exit scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger_1_out", duration: 300})
                .setTween(tween)
                // // .addIndicators({name: "staggering"}) // add indicators (requires plugin)
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


// build entrance tween
var tween = TweenMax.staggerFromTo(".animate_t_2", 2, {transform: "scale(.75)", opacity: 0}, {transform: "scale(1)", opacity: 1, ease: Circ.easeOut}, 0.05);

// build entrance scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger_2_in", duration: 300})
                .setTween(tween)
                // .addIndicators({name: "staggering 2"}) // add indicators (requires plugin)
                .addTo(controller);


// build entrance tween
var tween = TweenMax.staggerFromTo(".animate_c_2", 2, {transform: "translateY(150px)", opacity: 0}, {transform: "translateY(0)", opacity: 1, ease: Circ.easeOut}, 0.05);

// build entrance scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger_2_in", duration: 300})
                .setTween(tween)
                // .addIndicators({name: "staggering 2"}) // add indicators (requires plugin)
                .addTo(controller);


// build exit tween
var tween = TweenMax.fromTo(".animate_t_2", 2, {transform: "translateY(0px)", opacity: 1}, {transform: "translateY(-150px)", opacity: 0, ease: Circ.easeOut}, 0.05);

// build exit scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger_2_out", duration: 300})
                .setTween(tween)
                // // .addIndicators({name: "staggering"}) // add indicators (requires plugin)
                .addTo(controller);



// build exit tween
var tween = TweenMax.staggerFromTo(".animate_c_2", 2, {top: 0, opacity: 1}, {top: -150, opacity: 0, ease: Circ.easeOut}, 0.05);

// build exit scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger_2_out", duration: 300})
                .setTween(tween)
                // // .addIndicators({name: "staggering"}) // add indicators (requires plugin)
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


// build entrance tween
var tween = TweenMax.staggerFromTo(".animate_t_3", 2, {transform: "translateX(50px)", opacity: 0}, {transform: "translateX(50px)", opacity: 1, ease: Circ.easeOut}, 0.05);

// build entrance scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger_3_in", duration: 300})
                .setTween(tween)
                // .addIndicators({name: "staggering 2"}) // add indicators (requires plugin)
                .addTo(controller);


// build entrance tween
var tween = TweenMax.staggerFromTo(".animate_c_3", 2, {transform: "translateY(150px)", opacity: 0}, {transform: "translateY(0)", opacity: 1, ease: Circ.easeOut}, 0.05);

// build entrance scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger_3_in", duration: 300})
                .setTween(tween)
                // .addIndicators({name: "staggering 2"}) // add indicators (requires plugin)
                .addTo(controller);


// build exit tween
var tween = TweenMax.fromTo(".animate_t_3", 2, {transform: "translateY(0px)", opacity: 1}, {transform: "translateY(-150px)", opacity: 0, ease: Circ.easeOut}, 0.05);

// build exit scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger_3_out", duration: 300})
                .setTween(tween)
                // // .addIndicators({name: "staggering"}) // add indicators (requires plugin)
                .addTo(controller);



// build exit tween
var tween = TweenMax.staggerFromTo(".animate_c_3", 2, {top: 0, opacity: 1}, {top: -150, opacity: 0, ease: Circ.easeOut}, 0.05);

// build exit scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger_3_out", duration: 300})
                .setTween(tween)
                // // .addIndicators({name: "staggering"}) // add indicators (requires plugin)
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

// build entrance tween
var tween = TweenMax.staggerFromTo(".animate_t_4", 2, {transform: "translateY(150px)", fontSize: '150px', opacity: 0}, {transform: "translateY(0px)", fontSize: '210px', opacity: 1, ease: Circ.easeOut}, 0.05);

// build entrance scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger_4_in", duration: 300})
                .setTween(tween)
                // .addIndicators({name: "staggering 2"}) // add indicators (requires plugin)
                .addTo(controller);


// build entrance tween
var tween = TweenMax.staggerFromTo(".animate_c_4", 2, {transform: "translateY(150px)", opacity: 0}, {transform: "translateY(0)", opacity: 1, ease: Circ.easeOut}, 0.05);

// build entrance scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger_4_in", duration: 300})
                .setTween(tween)
                // .addIndicators({name: "staggering 2"}) // add indicators (requires plugin)
                .addTo(controller);


// build exit tween
var tween = TweenMax.fromTo(".animate_t_4", 2, {transform: "translateY(0px)", opacity: 1}, {transform: "translateY(-150px)", opacity: 0, ease: Circ.easeOut}, 0.05);

// build exit scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger_4_out", duration: 300})
                .setTween(tween)
                // // .addIndicators({name: "staggering"}) // add indicators (requires plugin)
                .addTo(controller);



// build exit tween
var tween = TweenMax.staggerFromTo(".animate_c_4", 2, {top: 0, opacity: 1}, {top: -150, opacity: 0, ease: Circ.easeOut}, 0.05);

// build exit scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger_4_out", duration: 300})
                .setTween(tween)
                // // .addIndicators({name: "staggering"}) // add indicators (requires plugin)
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

// build entrance tween
var tween = TweenMax.staggerFromTo(".animate_t_5_2", 2, {transform: "translateY(-150px)", opacity: 0}, {transform: "translateY(0)", opacity: 1, ease: Circ.easeOut}, 0.05);

// build entrance scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger_5_in", duration: 300})
                .setTween(tween)
                // .addIndicators({name: "staggering 2"}) // add indicators (requires plugin)
                .addTo(controller);



// build entrance tween
var tween = TweenMax.staggerFromTo(".animate_t_5_1", 2, {transform: "translateY(150px)", opacity: 0}, {transform: "translateY(0)", opacity: 1, ease: Circ.easeOut}, 0.05);

// build entrance scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger_5_in", duration: 300})
                .setTween(tween)
                // .addIndicators({name: "staggering 2"}) // add indicators (requires plugin)
                .addTo(controller);


// build entrance tween
var tween = TweenMax.staggerFromTo(".animate_c_5", 2, {transform: "translateY(150px)", opacity: 0}, {transform: "translateY(0)", opacity: 1, ease: Circ.easeOut}, 0.05);

// build entrance scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger_5_in", duration: 300})
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