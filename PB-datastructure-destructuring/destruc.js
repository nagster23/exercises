// **Instructions**
// #### 1. Array Destructuring
// * Declare the variables `fruit`, `vegetable`, `food`. Assign the following values to the variables respectively: 
// "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to `food`).
//  Use array destructuring assignment to complete this task.

let [fruit, vegetable, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza"];
console.log(fruit);
console.log(vegetable);
console.log(...food);

// #### 2.Object Destructuring
// * Create an object which contains key pair values of names and the respective halloween costume e.g. `fran: "witch"`. 
//   Assign each key pair value to corresponding variable. Print out the object values. 

let julia, bianca, jaoa;
({
    julia,
    bianca,
    jaoa
}= {
    julia: 'Supergirl',
    bianca: 'Catwoman',
    jaoa: 'Wolfverine'
});
console.log(julia);
console.log(jaoa);

// #### 3. Parameters: Object Destructuring 
// * Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc. 
// * Then, create a function to display all of the band/musician's data. 
// * Example

const object = {
    name: 'Eminem',
    style: 'Rapper',
    greatest: 'SlimShady',
    nationality: 'USA',
};

const musician = ({name, style, greatest, nationality}) => {
    return name + ' from ' + nationality + ' is the biggest '+ style + ' with the Album ' + greatest + ', which he won few Oscar';
};

console.log(musician(object));