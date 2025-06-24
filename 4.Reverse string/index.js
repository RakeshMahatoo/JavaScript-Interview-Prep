let str = "hello world";


function reverseString(str){
    console.log(str.split(" "));
    return str.split("").reverse().join(" ")
}

console.log(reverseString(str));