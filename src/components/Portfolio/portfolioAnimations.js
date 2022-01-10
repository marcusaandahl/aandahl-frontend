import $ from 'jquery';
import gsap from 'gsap/dist/gsap';

import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

function expPortfolioAnim() {
    const tlLanding = gsap.timeline();
    if (window.location.pathname === '/'){
    $(() => {
        tlLanding.from($("#navbar"), {
            autoAlpha: 0,
            duration: 1,
        })
        .from($('.landing .bigTitle'), {
            autoAlpha: 0,
            duration: 2
        }, 0.4)
        .from($('.landing .icons'), {
            autoAlpha: 0,
            duration: 2
        }, 0.8)
        .from($('.landing .CTA'), {
            autoAlpha: 0,
            duration: 2
        }, 1.2);

        gsap.from($(".projects .title"), {
            scrollTrigger: {
                trigger: $(".projects"),
                start: "top center",
                end: "top center",
                toggleActions: "play none none none"
            },
            autoAlpha: 0,
            duration: 1
        })

        $(".Pcard").each((i, el) => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: $(".projects"),
                    start: "top center",
                    end: "top center",
                    toggleActions: "play none none none"
                },
                autoAlpha: 0,
                y: 150,
                duration: 1,
                delay: (0.5 + 0.5*i)
            })
        })

        gsap.from($(".skills .title"), {
            scrollTrigger: {
                trigger: $(".skills"),
                start: "top center",
                end: "top center",
                toggleActions: "play none none none"
            },
            autoAlpha: 0,
            duration: 1
        })

        $(".skills .wrap .logos .logo").each((i, el) => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: $(".skills"),
                    start: "top center",
                    end: "top center",
                    toggleActions: "play none none none"
                },
                autoAlpha: 0,
                y: 100,
                duration: 0.5,
                delay: (0.5 + 0.2*i)
            })
        })

        gsap.from($(".contact .title"), {
            scrollTrigger: {
                trigger: $(".contact"),
                start: "top center",
                end: "top center",
                toggleActions: "play none none none"
            },
            autoAlpha: 0,
            duration: 1
        })

        gsap.from($(".contact .contactForm"), {
            scrollTrigger: {
                trigger: $(".contact"),
                start: "top center",
                end: "top center",
                toggleActions: "play none none none"
            },
            y: 150,
            autoAlpha: 0,
            duration: 1
        })
    })
    }
}

export default expPortfolioAnim;