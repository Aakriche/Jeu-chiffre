

let aujourdhui = new Date(); //Date d'aujourd'hui
let nbrAnnee = aujourdhui.getFullYear(); //Année d'aujourd'hui
const milneuf = 1900;
var tabAnnees = []; // Le tableau des années de 1900 à 2021
var iTabAnnees = 0; // Indice du tableau tabAnnees
var annee = 0;  //Var conteneur

var selectannee = document.getElementById('selectannee');
// var options = [];


annee = parseInt(nbrAnnee); // Année prend 2021

do {  
  tabAnnees.push(annee); // Le Tableau reçoit la valeur annee
  selectannee.add(new Option (tabAnnees[iTabAnnees], tabAnnees[iTabAnnees]));
  annee--; //l'annee réduit de 1
  iTabAnnees ++; // L'indice du tableau augmente
} while (annee > milneuf);


var tabMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
var iTabMois = 0;

do {
    selectmois.add(new Option (tabMois[iTabMois], tabMois[iTabMois]));
    iTabMois++;
} 
while (iTabMois < tabMois.length);

var tabJours = 1; //tableau de jours
var iTabJours = 0; // Indice du tableau de jours


function generateJour () {


    tabJours = 1; //tableau de jours 
    iTabJours = 0; // ID tableau de jours   
    document.getElementById('selectjour').innerText = null ; // Efface les options "jour", afin d'en remettre de nouvelles à chaque changement de mois.

    //Fonction qui vérifie si une année est bissextile
    function isLeap(year) {
        return new Date(selectannee.value, 1, 29).getDate() === 29;
    }


    // Definit si le menu des jours affichera 31 30 29 ou 28 jours
    switch (true) {

        case ["Janvier", "Mars", "Mai", "Juillet", "Aout", "Octobre", "Décembre"].includes(selectmois.value):
            do {selectjour.add(new Option (tabJours, tabJours));
            tabJours ++;
        } 
        while (tabJours <= 31);
        break;
    
        case ["Avril", "Juin", "Septembre", "Novembre"].includes(selectmois.value):
            do {selectjour.add(new Option (tabJours, tabJours));
            tabJours ++;
        } 
        while (tabJours <= 30);
        break;

        case ["Février"].includes(selectmois.value) && isLeap(selectannee.value):
            do {selectjour.add(new Option (tabJours, tabJours));
            tabJours ++;
        } 
        while (tabJours <= 29); 
        break;

        case ["Février"].includes(selectmois.value) && (isLeap(selectannee.value) == false):
            do {selectjour.add(new Option (tabJours, tabJours));
            tabJours ++;
        } 
        while (tabJours <= 28);
        break;

    }

}

//génere le menu des jours
generateJour();


//Detecte les changements d'années et de mois pour actualiser le nombre de jours et relancer la fonction précédente.
selectannee.addEventListener ('change', generateJour);
selectmois.addEventListener ('change', generateJour);


// CALCUL

//Selectionne la date anniversaire
let anniv = new Date (parseInt(selectannee.value), parseInt(tabMois.indexOf(selectmois.value)), parseInt(selectjour.value) );
var valeuranniv;
var valeuraujd;
var time;




//Detecte les changements de dates et actualise la date anniversaire
function anniversaireChange(){
    anniv = new Date (parseInt(selectannee.value), parseInt(tabMois.indexOf(selectmois.value)), parseInt(selectjour.value) ); //Date de naissance
    valeuranniv = anniv.getTime(); // Extrait la valeur de la date anniversaire en milisec
    valeuraujd = aujourdhui.getTime(); // Extrait la valeur de la date d'aujourd'hui en milisec
    time = valeuraujd - valeuranniv; // Soustrait pour obtenir la valeur vécue en milisec
}

//Relance la fonction si changement de date
selectannee.addEventListener ('change', anniversaireChange);
selectmois.addEventListener ('change', anniversaireChange);
selectjour.addEventListener ('change', anniversaireChange);



//Lance le calcul par années/mois/jours en fonction du radio choisi
function calculer() {

    alert('Votre date de naissance est ' + anniv.toLocaleDateString("fr-FR"))

    if (document.getElementById('jour').checked) {  //fonction jours

        function calcul1() {

            resultat = time/86400000; // Conversion milisec/jour
            alert('En jours vous avez vécu ' + Math.round(resultat) + " jours");

        }
        calcul1();

    }

    else if (document.getElementById('mois').checked) {  //fonction mois

        function calcul2() {

            resultat = time/2629800000; //conversion milisec/mois
            alert('En mois vous avez vécu ' + Math.round(resultat) + " mois");

        }

        calcul2();

    }

    else if (document.getElementById('annee').checked) { //fonction année

        function calcul3() {

            resultat = time/31557600000; //conversion milisec/année
            alert('En années vous avez vécu ' + Math.round(resultat) + " ans");

        }

        calcul3();

    }

}
//click
var boutonc = document.getElementById('bouton');
boutonc.addEventListener("click", calculer);



