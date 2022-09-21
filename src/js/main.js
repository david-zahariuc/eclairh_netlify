

$(".conseil").click(function () {
    window.location.replace("/conseil_rh");
})
$(".audit").click(function () {
    window.location.replace('/audit_organisationnel');
})
$(".gestion").click(function () {
    window.location.replace('/gestion');
})
$(".legal").click(function () {
    window.location.replace('/conformite_legale');
})
$(".gouvernance").click(function () {
    window.location.replace('/gouvernance_partagee');
})
$(".accompagnement").click(function () {
    window.location.replace('/accompagnement_individuel');
})

$(".asso").click(function () {
    window.location.replace('/asso');
})
$(".particulier").click(function () {
    window.location.replace('/particulier');
})
$(".rep_perso").click(function () {
    window.location.replace('/rep_perso');
})
$(".entreprise").click(function () {
    window.location.replace('/entreprise');
})
/*contact btn*/
$(".contact_btn").click(function () {
    window.location.replace("/contact");
})

$(document).ready(function () {

    /* Contact page make an appointment */

    if ($('input[name="appointment"]').prop("checked", true)) {
        $('input[name="date"]').attr('disabled', false);
        $('input[name="creneau_horaire"]').attr('disabled', false);
    }

    /**/

    /* responsive images */
    /*
    if ($(window).width() < 400) {
        $(".fit_img").addClass("img_y_fit");
        $(".fit_img").removeClass("img-fluid");
    }
    else if ($(window).width() < 576) {
        $(".fit_img").addClass("img-fluid");
        $(".fit_img").removeClass("img_y_fit");
    } else {
        $(".fit_img").removeClass("img-fluid");
        $(".fit_img").addClass("img_y_fit");

    }*/
    /**/
    $(".dropdown").hover(function () {
        var dropdownMenu = $(this).children(".dropdown-menu");
        if (dropdownMenu.is(":visible")) {
            dropdownMenu.parent().toggleClass("open");
        }
    });

    $(".flip-card").hover(function () {

        $(this).find(".flip-card-back")
            .css('transform', 'perspective(none) rotateY(0)')
        $(this).find(".flip-card-front")
            .css('transform', 'perspective(none) rotateY(-180deg)')

    }, function () {

        $(this).find(".flip-card-front")
            .css('transform', 'perspective(none) rotateY(0deg)')
        $(this).find(".flip-card-back")
            .css('transform', 'perspective(none) rotateY(180deg)')
    })

});

