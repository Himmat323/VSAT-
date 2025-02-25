
gsap.from(".slide1 h1", {
    y: 90,
    opacity: 0,
    duration: 2,
    stagger: 1,
    delay: .3,
    scrollTrigger: "body"

})

gsap.from(".slide2", {
    y: 90,
    opacity: 0,
    duration: 2,
    stagger: 1,
    delay: 3,
    scrollTrigger: {
        trigger: ".slide2",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
})


gsap.from(".slide3", {
    y: 90,
    opacity: 0,
    duration: 2,
    stagger: 1,
    delay: 3,
    scrollTrigger: {
        trigger: ".slide3",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
})


gsap.from(".charging", {
    y: 90,
    opacity: 0,
    duration: 2,
    stagger: 1,
    delay: 3,
    scrollTrigger: {
        trigger: ".charging",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
})