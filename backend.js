// Landing Screen Animation using GSAP 
let timeline1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.navArea',
        start: '0%',
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

timeline1.fromTo('.motto', {y: 0}, {y: -400});
timeline2.fromTo('.logo', {scale: 6}, {scale: 1, top: "2rem", left: "3rem", x: "50%", y: "50%"});

// Clearing textbox on click
$('input:text').click(
    function(){
        $(this).val('');
    });

// Calling API for search bar entered
