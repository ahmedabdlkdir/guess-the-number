function play() {

    let strNumInput = document.getElementById("input-number");
    let strResult = document.getElementById("result-text");
    let btnReset = document.getElementById("btn-reset");
    let btnGuess = document.getElementById("btn-guess");
    let numRandom = null;


    function getRandomNumber(min, max){ return Math.floor(Math.random() * (max - min + 1)  + min); }

    function guessTheNumber(){
        numInput = Number(strNumInput.value) ;
        numRandom = getRandomNumber(1,5);
        displayResult();
    }

    function displayResult() {
        strResult.innerHTML = ( numInput == numRandom) ? "Success!" : "Failure!";
        strResult.style.color = (strResult.innerHTML == "Success!") ?  "var(--success-color)" : "var(--failure-color)";
        strResult.style.display = "block";
        if(numInput == 0) strResult.style.display = "none";
    }

    function reset(){
        strNumInput.value = "";
        strResult.style.display = "none";
        strNumInput.reset();
        window.location.reload();
    }

    btnGuess.addEventListener("click",guessTheNumber);
    btnReset.addEventListener("click", reset);


}

play();