
/* Navigation between pages */
$(".conseil").click(function () {
    window.location.href="/conseil-rh";
})
$(".audit").click(function () {
    window.location.href="/audit-organisationnel";
})
$(".gestion").click(function () {
    window.location.href="/gestion-rh";
})
$(".legal").click(function () {
    window.location.href="/conformite-legale";
})
$(".gouvernance").click(function () {
    window.location.href="/gouvernance-partagee";
})
$(".accompagnement").click(function () {
    window.location.href="/accompagnement-individuel";
})

$(".asso").click(function () {
    window.location.href="/association";
})
$(".particulier").click(function () {
    window.location.href="/particulier";
})
$(".rep_perso").click(function () {
    window.location.href="/representant-du-personnel";
})
$(".entreprise").click(function () {
    window.location.href="/entreprise";
})
/*contact btn*/
$(".contact_btn").click(function () {
    window.location.href="/contact";
})
$(".send_btn").click(function () {
    window.location.href="/contact";
})

$(document).ready(function () {
    /* Drop-down menu */
    $(".dropdown").hover(function () {
        var dropdownMenu = $(this).children(".dropdown-menu");
        if (dropdownMenu.is(":visible")) {
            dropdownMenu.parent().toggleClass("open");
        }
    });
    /**/

    /* cards flip on hover function */
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
    /**/

    /* Back to top function */
    $(".contr_over").on("click", function () {
        $('html, body').animate({
            scrollTop: $(".bg_sable").height()
        }, 50);
    })
    /**/
});

/* contact date */


$(function () {

    let today = new Date()
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let year = today.getFullYear();
    if (month < 10)
    month = '0' + month.toString();
    if (day < 10)
        day = '0' + day.toString();
    let minDate = year + '-' + month + '-' + day;
    $('#datepicker').attr('min', minDate);
    
})

/**/

/* Validation de formulaire */

 /* */