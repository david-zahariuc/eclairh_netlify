

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

/*  menu déroulant*/
$(document).ready(function () {

    $(".dropdown").hover(function () {
        var dropdownMenu = $(this).children(".dropdown-menu");
        if (dropdownMenu.is(":visible")) {
            dropdownMenu.parent().toggleClass("open");
        }
    });
/**/

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


    
        $(".contr_over").on("click", function(){
          
           
             $('html, body').animate({
            scrollTop:  $( ".bg_sable" ).height()
        }, 50);
        })
});

/* Validation de formulaire */

let nom = document.getElementById('name');
let erreurNom = document.getElementById('msgErreur');
let form = document.getElementsByTagName('form')[0];
let nomRegExp = new RegExp("^[A-Z][A-Za-z' ,!]{2,35}$");


nom.addEventListener('input', function (event) {
    if (nom.validity.valid  && nomRegExp.test(nom.value)) {
        erreurNom.textContent = '';
    } else {
        afficherErreur ();
  }
});
form.addEventListener('submit', function (event) {
    if(!(nomRegExp.test(nom.value)) || !nom.validity.valid) {
        event.preventDefault();

        afficherErreur ();
    }
  });

  function afficherErreur () {
    let exp2 = new RegExp("(?=.*?[0-9])");
    let exp3 = new RegExp(".{2,}");
    let message = "";
    if(nom.validity.valueMissing) {
        message += 'Veuillez insérer votre nom et prénom';
    }
     else if(exp2.test(nom.value)) {
        message += 'Le nom ne doit pas contenir des chiffres';
    } else if (!exp3.test(nom.value)) {
        message += 'Le nom doit contenir au minimum 2 caractères';
    }
    erreurNom.innerHTML = message;
}   