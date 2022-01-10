import $ from 'jquery';
import gsap from 'gsap/dist/gsap';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
const tweens = {};
const popovers = {};

function expLogoHover() {
    if (window.location.pathname === '/'){
    $(() => {
        $(".logo").each(function() {
            var className = $(this).attr('class').slice(5);
            tweens[className] = gsap.to($("."+className), {duration: 0.5, scale: 1.3, paused: true});
            var popover = new bootstrap.Popover($(this)[0], {
                content: '',
                continer: 'body',
                trigger: "manual",
                delay: { "show": 200, "hide": 100 }
            })
            popovers[className] = popover;
        })
        $(".logo").on("mouseover", (e) => {
            gsap.to(tweens[$(e.target).attr('class').slice(5)], {totalProgress: 1});
        })
        $(".logo").on("mouseleave", (e) => {
            popovers[$(e.target).attr('class').slice(5)].hide();
            gsap.to(tweens[$(e.target).attr('class').slice(5)], {totalProgress: 0});
        })
        $(".logo").on("click", (e) => {
            popovers[$(e.target).attr('class').slice(5)].toggle();
        });
    })
    }
}

// module.exports = {expLogoHover};

export default expLogoHover;