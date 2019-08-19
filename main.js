var span = document.querySelector("h1 span");
var button = document.querySelector(".main-button")
var getInput = document.querySelector("input");

button.addEventListener('click', function () {
    span.innerText = getInput.value;
});

var hideP = document.querySelector(".buttonHow");
var toggleHow= document.querySelector(".dog-info");

hideP.addEventListener("click", function (){
  toggleHow.classList.toggle("hidden")
});

var hideP2 = document.querySelector(".buttonWhat");
var toggleWhat = document.querySelector(".dog-info2");

hideP2.addEventListener("click", function (){
  toggleWhat.classList.toggle("hidden")
});

var hideP3 = document.querySelector(".buttonFacts");
var toggleFacts = document.querySelector(".dog-info3");

hideP3.addEventListener("click", function (){
  toggleFacts.classList.toggle("hidden")
});
