

gsap.from(".slider1 h1", {
    y: 90,
    opacity: 0,
    duration: 2,
    stagger: 1,
    delay: .3,
    scrollTrigger: "body"

})



gsap.from(".content", {
    y: 90,
    opacity: 0,
    duration: 2,
    stagger: 1,
    delay: 3,
    scrollTrigger: {
        trigger: ".content",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
})



gsap.from(".ipp", {
    y: 90,
    opacity: 0,
    duration: 2,
    stagger: 1,
    delay: 2,
    scrollTrigger: {
        trigger: ".ipp",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
})


gsap.from(".epc", {
    y: 90,
    opacity: 0,
    duration: 2,
    stagger: 1,
    delay: 2,
    scrollTrigger: {
        trigger: ".epc",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
})




gsap.from(".om", {
    y: 90,
    opacity: 0,
    duration: 2,
    stagger: 1,
    delay: 2,
    scrollTrigger: {
        trigger: ".om",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
})

gsap.from(".storage", {
    y: 90,
    opacity: 0,
    duration: 2,
    stagger: 1,
    delay: 2,
    scrollTrigger: {
        trigger: ".storage",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
})
