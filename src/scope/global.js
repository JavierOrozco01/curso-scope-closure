// variables 

var a; // declarar una variable 

var b = 'b'; // declaramos / asignamos 

b = 'bb'; // reasignacion 

var a = 'aa'; // redeclaracion 


//Global Scope 

var fruit = 'Apple'; // Global 


function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia';
    console.log(country);
}

countries();
console.log(country);