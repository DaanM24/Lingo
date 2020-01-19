var attempts = 0;
var letters = 0;
var tempInput;
var inputLetters;
var answer = words[Math.floor(Math.random()*words.length)];
var tempAns = answer.split("");
var id = attempts + "-" + letters;
var points;



function input(){
    tempInput = document.getElementById("InputField").value;
    inputLetters = tempInput.split("");
    console.log(inputLetters);
    
    for(letters = 0; letters < 5; letters++){
        id = attempts + "-" + letters;
        document.getElementById(id).innerHTML = inputLetters[letters];
        if(tempAns.includes(inputLetters[letters])) {
            var checkedletter = document.getElementById(id)
            checkedletter.style.backgroundColor = "Yellow";
        }
        if(inputLetters[letters] === tempAns[letters]) {
            var checkedletter = document.getElementById(id)
            checkedletter.style.backgroundColor = "Green";
            points++;
        }
        if(points == 5){
            alert("Je hebt het woord geraden")
        }
    }
    
    points = 0;
    attempts++
    if(attempts == 5){
        document.getElementById("button").style.display = 'none';
        document.getElementById("InputField").style.display = 'none';
        alert("Je hebt verloren")
    }
}


document.getElementById("0-0").innerHTML = tempAns[0];
document.getElementById("0-0").style.backgroundColor = 'green';