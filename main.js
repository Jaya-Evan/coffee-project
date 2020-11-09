"use strict"
//html for displaying list of coffees
function renderCoffee(coffee) {
    var html = '<div class = "coffees">';
    html += '<div>' + coffee.name;
    html += '<p>' + coffee.roast + '</p>' + '</div>';
    return html;
}

//reverse the index numbers for the coffees array of object
function renderCoffees(coffees) {
    var reversed=coffees.reverse()
    var html = '';
    for(var i = coffees.length-1; i >= 0; i--) {
        html += renderCoffee(reversed[i]);
    }
    return html;
}

//Function to update coffee as per selected roast
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


//coffees array of objects
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

// query selectors for single coffee
var tbody2=document.querySelector('#SingleCoffee');
var singleCoffeeButton=document.querySelector("#submit-coffee");
var x=document.querySelector('#coffeeList');

tbody2.innerHTML = renderSingleCoffee(coffees);
singleCoffeeButton.addEventListener("click", updateSingleCoffeeName);


//__------------------------------------__//__------------------------------------__//__------------------------------------__
//html for displaying single coffee
function renderSingleCoffee(coffee) {
    var html = '<div class = "coffees">';
    html += '<div>' + coffee.name;
    html += '<p>' + coffee.roast + '</p>' + '</div>';
    return html;
}
//function to display single coffee ----->PENDING
function singleCoffee(coffees) {
    var html = '';
    for (var i = 0; i <= coffees.length; i++) {
        html += coffees.name;
    }
    return html;
}

//function to update coffee as per search --->PENDING
function updateSingleCoffeeName(e){
    e.preventDefault();
    console.log(x.value)
    var selectedCoffee=x.value.toLowerCase()
    var filteredSingleCoffee = coffees.name;
    for (var i = 0; i < coffees.length; i++) {
        if (coffees[i].name === selectedCoffee){
            filteredSingleCoffee = selectedCoffee;
        }
    }
    tbody2.innerHTML = singleCoffee();
}


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