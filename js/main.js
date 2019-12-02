$(document).ready(function() {
    $('.lead').remove(); // slectionne la class lead, puis la supprime
    $('.span3').addClass('span4').removeClass('span3'); //selectionne les class span3, leur ajoute en class span4 (afin de remplir les 12 colonnes BootStrap 3x4=12), retire la class span3
    $('.btn').removeClass('btn-primary').addClass('btn-info').html('Découvrir la destination').css({'font-weight': 'bold','font-size': '17px', 'padding': '10px','width': '80%'});//selectionne les class btn-primary, leur ajoute la class btn-info, injecte du HTML dedans, ajoute du css afin de personnalisé les boutons
});