
function getRandomNumber(min, max){
    for(let i = 1; i<=20 ; i++){
        let value = Math.floor(Math.random()*(max-min+1)+min);
        console.log(value);
    }
    
}
getRandomNumber(50,100);

