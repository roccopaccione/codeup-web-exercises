var fizzBuzz = function(num) {
    for(var i = 1; i <= num; i++){
        if(i % 15 === 0) {
            console.log(i + " fizzbuzz");
        }else if(i % 3 === 0) {
            console.log(i + " fizz");
        }else if(i % 5 === 0) {
            console.log(i + " buzz");
        }else{
            console.log(i);
        }
    }
}

fizzBuzz(30)