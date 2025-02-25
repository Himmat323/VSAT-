
gsap.from(".offic ", {
    x: -90,
    opacity: 0,
    duration: 2,
    delay:1.5,
    scrollTrigger: {
        trigger: ".offic h5",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
})


gsap.from(".call ", {
    y: 90,
    opacity: 0,
    duration: 2,
    delay:1.5,
    scrollTrigger: {
        trigger: ".call h5",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
})

gsap.from(".banner h1", {
    y: 90,
    opacity: 0,
    duration: 2,
    stagger:1,
    delay:.3,
    scrollTrigger: "body"
})


gsap.from(" .form ", {
    x: 90,
    opacity: 0,
    duration: 2,
    delay:3,
    scrollTrigger: {
        trigger: " .form",
        scroller: "body",
        start: "top 50%",
        end: "top 65%",
        scrub: 1,
    }
})