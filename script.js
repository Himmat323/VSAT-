
gsap.to("#nav", {
    backgroundColor: "#fff",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
        // markers:true
    }
})

gsap.to("#main", {
    backgroundColor: "#fff",
    scrollTrigger: {
        Trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        // markers:true,
        scrub: 2
    }
})

gsap.from("#about-us img, #about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
})

gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 2,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
})

gsap.from("#colon1", {
    y: -70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})


gsap.from("#green-div", {
    y: 90,
    opacity: 0,
    duration: 1,
    delay:1,
    scrollTrigger: {
        trigger: "#green-div",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
})

gsap.from("#page4", {
    y: 90,
    opacity: 0,
    duration: 1,
    stagger:1,
    delay:1,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
})




