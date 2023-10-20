var name = prompt("What is your name?");
alert("Hello " + name + "! Let's do some math!");
alert("Choose a category to begin!");

function openFunction(evt, mathFunction) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(mathFunction).style.display = "block";
    evt.currentTarget.className += " active";
}

var addnumOne = document.getElementById("addnum-one");
var addnumTwo = document.getElementById("addnum-two");
var addSum = document.getElementById("add-sum");

var subSum = document.getElementById("sub-sum");
var subnumOne = document.getElementById("subnum-one");
var subnumTwo = document.getElementById("subnum-two");

var multSum = document.getElementById("mult-sum");
var multnumOne = document.getElementById("multnum-one");
var multnumTwo = document.getElementById("multnum-two");

var divSum = document.getElementById("div-sum");
var divnumOne = document.getElementById("divnum-one");
var divnumTwo = document.getElementById("divnum-two");

addnumOne.addEventListener("input", add);
addnumTwo.addEventListener("input", add);

subnumOne.addEventListener("input", sub);
subnumTwo.addEventListener("input", sub);

multnumOne.addEventListener("input", mult);
multnumTwo.addEventListener("input", mult);

divnumOne.addEventListener("input", div);
divnumTwo.addEventListener("input", div);

function add(){
	var one = parseFloat(addnumOne.value) || 0;
	var two = parseFloat(addnumTwo.value) || 0;

	var res = addSum.innerHTML = "The sum is " + (one+two) + "!";

}

function sub(){
	var one = parseFloat(subnumOne.value) || 0;
	var two = parseFloat(subnumTwo.value) || 0;

	subSum.innerHTML = "The difference is: " + (one-two) + "!";
}


function mult(){
	var one = parseFloat(multnumOne.value) || 0;
	var two = parseFloat(multnumTwo.value) || 0;

	multSum.innerHTML = "The product is: " + (one*two) + "!";
}


function div(){
	var one = parseFloat(divnumOne.value) || 0;
	var two = parseFloat(divnumTwo.value) || 1;

	divSum.innerHTML = "The quotient is: " + (one/two) + "!";
}
