// high order function - .map() , .filter, .find(),  .sort



let arr = [10,25,20,25,30,35,40];

function filterEvenNumber(arr){
    return arr.filter(num => num % 2 === 0);
}

console.log(filterEvenNumber(arr));
console.log("---------------")
console.log(arr);
