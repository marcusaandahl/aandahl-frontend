import $ from 'jquery';

function scrollSpy() {
    // Nav Elements
    const navProj = $("#navbar-projects");
    const navSkill = $("#navbar-skills");
    const navCont = $("#navbar-contact");

    // Section Locations
    var projLoc = ($('.portfolio .projects').offset().top - 10);
    var skillsLoc = ($('.portfolio .skills').offset().top - 10);
    var contLoc = ($('.portfolio .contact').offset().top - 10);

    // Window Loc
    var scrollLoc = $(window).scrollTop();
    if (scrollLoc < projLoc) {
        navProj.removeClass('active');
        navSkill.removeClass('active');
        navCont.removeClass('active');
    } else if ((scrollLoc >= projLoc) && (scrollLoc < skillsLoc)) {
        navProj.addClass('active');
        navSkill.removeClass('active');
        navCont.removeClass('active');
    } else if ((scrollLoc >= skillsLoc) && (scrollLoc < contLoc)) {
        navProj.removeClass('active');
        navSkill.addClass('active');
        navCont.removeClass('active');
    } else if (scrollLoc >= contLoc) {
        navProj.removeClass('active');
        navSkill.removeClass('active');
        navCont.addClass('active');
    }
}

function expScrollSpy(){
    if (window.location.pathname === '/'){
    $(() => {
        scrollSpy();
        $(window).on("scroll", () => {
            scrollSpy();
        })

        var projLoc = $('.portfolio .projects').offset().top;
        var skillsLoc = $('.portfolio .skills').offset().top;
        var contLoc = $('.portfolio .contact').offset().top;

        const navLand = $('#logoLink');
        const navProj = $("#navbar-projects");
        const navSkill = $("#navbar-skills");
        const navCont = $("#navbar-contact");

        navLand.on('click', () => {
            $(window).scrollTop(0);
        })
        navProj.on("click", () => {
            $(window).scrollTop(projLoc);
        })
        navSkill.on("click", () => {
            $(window).scrollTop(skillsLoc);
        })
        navCont.on("click", () => {
            $(window).scrollTop(contLoc);
        })
    })
    }
}

// module.exports = {expScrollSpy};

export default expScrollSpy;
