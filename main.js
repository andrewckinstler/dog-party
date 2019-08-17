// var span = document.querySelector("h1 span");
// var button = document.querySelector(".main-button")
// var getInput = document.querySelector("input");
//
// button.addEventListener('click', function () {
//     span.innerText = getInput.value;
// });


var hideP = document.querySelector(".buttonHow");
console.log(hideP)
var toggleHow= document.querySelector(".dog-info");

hideP.addEventListener("click", function (){
  console.log("hi");
  toggleHow.classList.toggle("hidden")
});

var hideP2 = document.querySelector(".buttonWhat");
console.log(hideP)
var toggleWhat = document.querySelector(".dog-info2");

hideP2.addEventListener("click", function (){
  console.log("hi");
  toggleWhat.classList.toggle("hidden")
});

var hideP3 = document.querySelector(".buttonFacts");
console.log(hideP)
var toggleFacts = document.querySelector(".dog-info3");

hideP3.addEventListener("click", function (){
  console.log("hi");
  toggleFacts.classList.toggle("hidden")
});
