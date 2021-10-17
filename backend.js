// Landing Screen Animation using GSAP 
    // Timeline 1  and Timeline 2 animation effect
let timeline1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.navArea',
        start: '0%',
        // How much of screen must be scrolled before animation takes effect
        end: '85%',
        scrub: 1,
    }
});
let timeline2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.navArea',
        start: '0%',
        end: '85%',
        scrub: 1,
    }
});
// After animation is complete, end value tells how long to keep the navbar pinned on top
let timeline3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.navArea',
        start: '0%',
        end: '200%',
        scrub: 1,
        pin: true,
        pinSpacing: false,

    }
});
// Motto area is moved out of screen view on scroll
timeline1.fromTo('.motto', {y: 0}, {y: -400});
// Logo is moved from middle of screen to motto position
timeline2.fromTo('.logo', {scale: 6}, {scale: 1, top: "2rem", left: "3rem", x: "50%", y: "50%"});

// Clearing textbox on click
$('input:text').click(
    function(){
        $(this).val('');
    });

// Calling API for search bar entered
