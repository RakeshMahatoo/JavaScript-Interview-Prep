let num = parseInt(prompt(`Enter the number you want to check (odd or even):`));

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        displayResult("Even");
    } else {
        displayResult("Odd");
    }
}

function displayResult(text) {
    let res = document.getElementById("result");
    res.innerHTML = `<h1>${text}, ${num}</h1>`;
    console.log(text);
}

checkEvenOdd(num);
