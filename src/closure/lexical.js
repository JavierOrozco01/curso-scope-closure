const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);


    function parent() {  //funcion interna 
        const inner = 2;    
        console.log(myNumber, myGlobal);
    
        function child() {
            console.log(inner, myGlobal, myNumber);

        }
        return child();
    }
    return parent();
}

myFunction();


nameOfDog("Elmo");

function nameOfDog(name) { 
    console.log(name); 
}; 




const fruits = () => { 
    if (true) { 
    var fruit1 = 'apple';
    const fruit2 = 'banana'; 
    let fruit3 = 'kiwi'; 
    } 

}


fruits();