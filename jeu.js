var nbrD = document.getElementById('propInp')
nbrD.readOnly = true;







function newJeu (){

    alert('Choisissez un chiffre entre 0 et 100 et rentrez le dans "Proposition", vous avez 30 secondes seulement !')


    nbrX = Math.floor(Math.random() * 100);
    var indiceInp = document.querySelector("#indInp");
    var repInp = document.querySelector("#repInp");
    var tryInp = document.querySelector("#tryInp");
    var chances = 2;
    var propo = document.querySelector('#propBtn');
    var soluce = document.querySelector('#solBtn');
    var divTimer = document.querySelector('#timer');

    indiceInp.value="";
    repInp.value="";
    tryInp.value="";
    nbrD.readOnly = false;
    

    document.querySelector('#solBtn').disabled = false;
    document.querySelector('#propBtn').disabled = false;
    document.querySelector('#newBtn').disabled = true;


    // var timerTvar = function timerT() {
    //     i=Number("0");
    //     setInterval(function(){i++;divTimer.innerHTML=i; }, 1000);
    // }


    function finDuGame() {
        
        indiceInp.value="";
        repInp.value="";
        tryInp.value="";
        chances =2;
        nbrD.value = '';
        document.querySelector('#solBtn').disabled = true;
        document.querySelector('#propBtn').disabled = true;
        document.querySelector('#newBtn').disabled = false;
        nbrD.readOnly = true;
        clearTimeout(t);
        clearTimeout(t2);
    
    }



    var t = 0;
    var c = 0;
    var t2 = 0;

    function timedCount() {
        document.getElementById("timer").innerHTML = c;
        c = c + 1;
        t = setTimeout(timedCount, 1000);
    }

    function stopCount() {
       
        alert("Temps écoulé, le nombre mystère était " + nbrX);
        finDuGame();
    }

    timedCount();
    t2 = setTimeout(stopCount, 30000);


 

    function proposition(){


        nbrD = document.getElementById('propInp');
        console.log(nbrD.value);
        console.log(nbrX);

        if ((parseInt(nbrD.value) > 0) && (parseInt(nbrD.value) < 100)) {

            

            if ((parseInt(nbrD.value) == nbrX)) {

            finDuGame();
            clearTimeout(t);
            clearTimeout(t2);
            alert("C'est gagné !");
            

            }

            if (chances > 7 ) { 

                finDuGame();
                alert('perdu, le nombre mystère était : ' + nbrX)
                
            }
  
            else if ((parseInt(nbrD.value) > nbrX)) {

            indiceInp.value = "Trop grand, c'est moins !";
            repInp.value += nbrD.value + " , ";
            tryInp.value = chances;
            nbrD.value = '';
            chances++;

            }

            else if ((parseInt(nbrD.value) < nbrX)) {

            indiceInp.value = "Trop petit, c'est plus !";
            repInp.value += nbrD.value + " , ";
            tryInp.value = chances;
            nbrD.value = '';
            chances++;
            }

        
        

        }

        else if ((parseInt(nbrD.value) < 0) || (parseInt(nbrD.value) >= 101)) {

            alert("Entre 0 et 100 on a dit");
            tryInp.value = chances;
            nbrD.value = '';
            chances++;
        } 
        
        

    }

    


    function solution(){
        alert('Le chiffre mystère était ' + nbrX);
        finDuGame();
    }
    
    
    var soluce = document.querySelector('#solBtn');
    soluce.addEventListener("click", solution);
    soluce.addEventListener("click", finDuGame);
    propo.addEventListener("click", proposition);


 
}


document.querySelector('#solBtn').disabled = true;
document.querySelector('#propBtn').disabled = true;


var newBtn = document.querySelector('#newBtn');
newBtn.addEventListener("click", newJeu);
