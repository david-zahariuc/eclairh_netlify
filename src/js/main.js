$("#conseil").click(function() {
    window.location.replace('conseil_rh.html');
})
$("#audit").click(function() {
    window.location.replace('audit_organisationnel.html');
})
$("#gestion").click(function() {
    window.location.replace('gestion.html');
})
$("#legal").click(function() {
    window.location.replace('conformite_legale.html');
})
$("#gouvernance").click(function() {
    window.location.replace('gouvernance_partagee.html');
})
$("#accompagnement").click(function() {
    window.location.replace('accompagnement_individuel.html');
})


$(document).ready(function(){
    $(".dropdown").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
/*
let card; 
$('.expertise_card_wrap').each(function(index){
    $(this).hover(function(){
        card = $(this.detach());
      });
})
 */   

  });