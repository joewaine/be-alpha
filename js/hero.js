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
