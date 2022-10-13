
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

/* Validation de formulaire */
/*
let nom = document.getElementById('name');
let erreurNom = document.getElementById('msgErreur');
let form = document.getElementsByTagName('form')[0];
let nomRegExp = new RegExp("^[A-Z][A-Za-z' ,!]{2,35}$");

nom.addEventListener('input', function (event) {
    if (nom.validity.valid && nomRegExp.test(nom.value)) {
        erreurNom.textContent = '';
    } else {
        afficherErreur();
    }
});
form.addEventListener('submit', function (event) {
    if (!(nomRegExp.test(nom.value)) || !nom.validity.valid) {
        event.preventDefault();

        afficherErreur();
    }
});

function afficherErreur() {
    let exp2 = new RegExp("(?=.*?[0-9])");
    let exp3 = new RegExp(".{2,}");
    let message = "";
    if (nom.validity.valueMissing) {
        message += 'Veuillez insérer votre nom et prénom';
    }
    else if (exp2.test(nom.value)) {
        message += 'Le nom ne doit pas contenir des chiffres';
    } else if (!exp3.test(nom.value)) {
        message += 'Le nom doit contenir au minimum 2 caractères';
    }
    erreurNom.innerHTML = message;
}   */