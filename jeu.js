







function solution(){
    alert('Le chiffre mystère était' + nbrX);
    chances = 0;

    }


function newJeu (){

    alert('Choisissez un chiffre entre 0 et 100 et rentrez le dans "Proposition"')



    var nbrX = Math.floor(Math.random() * 100);
    var indiceInp = document.querySelector("#indInp");
    var repInp = document.querySelector("#repInp");
    var tryInp = document.querySelector("#tryInp");
    var chances = 0;
    var essais = 1;
    var nbrD;
    var propo = document.querySelector('#propBtn');


    function proposition(){

        nbrD = document.getElementById('propInp');
        console.log(nbrD.value);

        if ((parseInt(nbrD.value) > 0) && (parseInt(nbrD.value) < 101)) {

        
            if ((parseInt(nbrD.value) == nbrX) && (chances < 7) ) {

            alert("C'est gagné !");
            indiceInp.value="";
            repInp.value="";
            tryInp.value="";
            newJeu;

            }
  
            else if ((parseInt(nbrD.value) > nbrX) && (chances < 7)) {

            indiceInp.value = "Trop grand, c'est moins !";
            repInp.value += nbrD.value + " , ";
            chances ++;
            tryInp.value = essais;
            essais++;

            }

            else if ((parseInt(nbrD.value) < nbrX) && (chances < 7)) {

            indiceInp.value = "Trop petit, c'est plus !";
            repInp.value += nbrD.value + " , ";
            chances ++;
            tryInp.value = essais;
            essais++;
            }

            else if (chances >= 7) { 
    
            alert('perdu, le nombre mystère était : ' + nbrX)
            chances = 0;
            indiceInp.value="";
            repInp.value="";
            tryInp.value="";
            }
        

        }

        else if ((parseInt(nbrD.value) < 0) || (parseInt(nnbrD.value) >= 101)) {

            alert("Entre 0 et 100 on a dit");
            chances++;
        } 
        
        

    }

   
    propo.addEventListener("click", proposition);


}



var soluce = document.querySelector('#solBtn');
soluce.addEventListener("click", solution);

var newBtn = document.querySelector('#newBtn');
newBtn.addEventListener("click", newJeu);
