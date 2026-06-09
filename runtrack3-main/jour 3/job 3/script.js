// Job 03 - Jeu du Taquin avec jQuery

$(document).ready(function () {

    var IMAGES = [
        'imagek/1.PNG',
        'imagek/2.PNG',
        'imagek/3.PNG',
        'imagek/4.PNG',
        'imagek/5.PNG',
        'imagek/6.PNG',
        'imagek/7.PNG',
        'imagek/8.PNG',
        'imagek/9.PNG',
    ];

    var grille = [];
    var fini = false;

    // Lance / relance le jeu
    function init() {
        fini = false;
        grille = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        // 200 déplacements valides aléatoires → toujours solvable
        for (var i = 0; i < 200; i++) {
            var voisins = getVoisins(grille.indexOf(8));
            deplacer(voisins[Math.floor(Math.random() * voisins.length)], false);
        }
        afficher();
        $('#message').text('');
        $('#btn-restart').hide();
    }

    // Cases adjacentes à la case vide (index 8)
    function getVoisins(v) {
        var voisins = [];
        if (v > 2) voisins.push(v - 3); // haut
        if (v < 6) voisins.push(v + 3); // bas
        if (v % 3 > 0) voisins.push(v - 1); // gauche
        if (v % 3 < 2) voisins.push(v + 1); // droite
        return voisins;
    }

    // Échange la case cliquée avec la case vide
    function deplacer(i, check) {
        var v = grille.indexOf(8);
        if ($.inArray(i, getVoisins(v)) === -1) return;
        grille[v] = grille[i];
        grille[i] = 8;
        if (check) verifier();
    }

    // Reconstruit la grille dans le DOM
    function afficher() {
        $('#taquin').empty();
        $.each(grille, function (i, val) {
            var $div = $('<div>').addClass('carreau').attr('data-i', i);
            if (val === 8) $div.addClass('vide');
            else $div.append($('<img>').attr('src', IMAGES[val]));
            $('#taquin').append($div);
        });
    }

    // Vérifie si [0,1,2,3,4,5,6,7,8] → gagné
    function verifier() {
        if (grille.join() === '0,1,2,3,4,5,6,7,8') {
            fini = true;
            $('#message').text('🎉 Vous avez gagné !').css('color', '#00b894');
            $('#btn-restart').fadeIn(400);
        }
    }

    // Clic sur un carreau
    $('#taquin').on('click', '.carreau', function () {
        if (fini) return;
        deplacer(parseInt($(this).data('i')), true);
        afficher();
    });

    // Bouton recommencer
    $('#btn-restart').on('click', init);

    init();
});