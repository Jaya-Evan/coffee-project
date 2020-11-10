"use strict"
//function --> displaying list of coffees
function renderCoffee(coffee) {
    var html = '<div class = "coffees">';
    html += '<div>' + coffee.name;
    html += '<p>' + coffee.roast + '</p>' + '</div>';
    return html;
}

//function-->reverse coffees
function renderCoffees(coffees) {
    var reversed=coffees.reverse()
    var html = '';
    for(var i = coffees.length-1; i >= 0; i--) {
        html += renderCoffee(reversed[i]);
    }
    return html;
}

//Function -->update coffee selected roast
function updateCoffees(e) {
    e.preventDefault();
    var selectedRoast = roastSelection.value.toLowerCase();
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}


var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection')

tbody.innerHTML = renderCoffees(coffees);
submitButton.addEventListener('click', updateCoffees);


                   // card #SingleCoffee
var tbody2=document.querySelector('#SingleCoffee');
                    //button #submit coffee
var singleCoffeeButton=document.querySelector("#submit-coffee");
                    //input type text #coffeeList
var inputForDataList=document.querySelector('#coffeeList');
                    //button-->singleCoffee
singleCoffeeButton.addEventListener("click", updateSingleCoffeeName);

function renderSingleCoffee(coffee) {
    var html = '<div class = "coffees">';
    html += '<div>' + coffee.name;
    html += '<p>' + coffee.roast + '</p>' + '</div>';
    return html;
}

//function --> displaying single coffee
function singleCoffee(singleCoffee) {
    var html = '';
    html += singleCoffee;
    return singleCoffee;
}

//function to update coffee as per search
function updateSingleCoffeeName(e){
    e.preventDefault();
    var selectedCoffee=inputForDataList.value.toLowerCase()
    var filteredSingleCoffee;
    for (var i = 0; i < coffees.length; i++) {
        if ((coffees[i].name).toLowerCase() === selectedCoffee){
            filteredSingleCoffee = selectedCoffee;
            break;
        } else {
            filteredSingleCoffee = "Sorry, not available..."
        }
    }
    tbody2.innerHTML = singleCoffee(filteredSingleCoffee);
}

//object==>New coffee
var newCoffee1={
    id:14,
    name:"Cold Coffee",
    roast: "mild"
}
//function to add new coffee
function addNewCoffee(e){
    e.preventDefault();
    coffees.push(newCoffee1)
    tbody.innerHTML=(renderCoffees(coffees))
}

var addCoffeeButton=document.querySelector('#test');
addCoffeeButton.addEventListener("click",addNewCoffee);


//BUFFER FOR  COMMENTED CODE
// function renderCoffeeSearch(coffee) {
//     var html = '<card class = "coffees">';
//     html += '<div>' + coffee.name;
//     html += '<p>' + coffee.roast + '</p>' + '</div>';
//
//     return html;
// }
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
// don't submit the form, we just want to update the data
// tbody2.innerHTML = renderSingleCoffee(coffees);





