// Declaring a funtion

function multiplyWithTwo (number) {
    // here we can define what should happen
    // function block
    console.log(number * 2);
}



// Anonymos function
const myFunction = function multiplyWithTwo (number) {
    // here we can define what should happen
    // function block
    console.log(number * 2);
}; // ; because is using const!!!

// Calling function with an arguement
multiplyWithTwo(5);

//Arrow Function 
// => because we using Arrow
const myArrowFunction = (number) => {

    console.log(number *2);
};
myArrowFunction(8);

console.log(".................................................");
console.log(".................calling Arrow Function.........");


function newFunction(param) {
    console.log('hello World ' + param); // Parameter scope
    console.log(param);
}
newFunction('Nagster');
newFunction('Bendis');

// Declare Variables in function

const myfunction3 = function (firstName1, lastName1) {
    // let functionVeriable = Parameter

    let firstName = firstName1;
    let lastName = lastName1;
    console.log('hello World ' + firstName1 + ' ' + lastName1); // Parameter scope
    console.log(firstName);
}

myfunction3('Consta', 'Tine');
myfunction3('Julia', 'Reis');

console.log("......................................");

// testFunction();
// funtion testFunction(); {
//     console.log('How R You');

// }
console.log("................... FunctionConvert................");

const convert = (minutes) => {
    //calculate from Minutes to Seconds
    // minutes * 60 seconds = seconds
console.log(minutes*60);
return minutes*60;
};
    let output = convert(5);
    console.log(output);

    console.log("................shorter version...............");

    const convert2 = (minutes) => minutes*60;
    const myOutput2 = convert2(100);
    console.log(myOutput2);