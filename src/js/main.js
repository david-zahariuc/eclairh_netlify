

$("#conseil").click(function () {
    window.location.replace('conseil_rh.html');
})
$("#audit").click(function () {
    window.location.replace('audit_organisationnel.html');
})
$("#gestion").click(function () {
    window.location.replace('gestion.html');
})
$("#legal").click(function () {
    window.location.replace('conformite_legale.html');
})
$("#gouvernance").click(function () {
    window.location.replace('gouvernance_partagee.html');
})
$("#accompagnement").click(function () {
    window.location.replace('accompagnement_individuel.html');
})


$(document).ready(function () {
    $(".dropdown").hover(function () {
        var dropdownMenu = $(this).children(".dropdown-menu");
        if (dropdownMenu.is(":visible")) {
            dropdownMenu.parent().toggleClass("open");
        }
    });
    
    
$(".flip-card").hover(function(){

   
    $(this).find(".flip-card-back")
    .css('transform', 'perspective(none) rotateY(0)')
    $(this).find(".flip-card-front")
    .css('transform', 'perspective(none) rotateY(-180deg)')
    
},function(){

    $(this).find(".flip-card-front")
    .css('transform', 'perspective(none) rotateY(0deg)')
    $(this).find(".flip-card-back")
    .css('transform', 'perspective(none) rotateY(180deg)')
})



});