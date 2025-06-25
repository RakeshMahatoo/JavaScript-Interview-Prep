// reverseOdd("appl"); 
// reverseOdd("one two four");  // eno owt four

function reverseOdd(str){
    if(str.length % 2 === 1){
         console.log("Original string:", str);
        let value = str.split("").reverse().join("");
        console.log("reversed string is:", value);
         console.log("String length is odd, returning original string.");
    }
 // why we write return str here? because we want to return the original string if the length is odd, otherwise it will return the reversed string.
   // if we will not write return str here, then it will return undefined.
    // if the length is even, it will return the original string.

   let word = str.split(" ");
    console.log("Original string:", word);
    for(let i=0; i<word.length; i++){
        if(word[i].length%2==1){
             word[i] = word[i].split("").reverse().join("");
            console.log("Reversed word:", word[i]);

        }
        
    }
    return word.join(' ')
}

console.log(reverseOdd("one two four"));
console.log(reverseOdd("apple"));


