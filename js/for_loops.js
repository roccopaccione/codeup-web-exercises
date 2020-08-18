function returnMultiplicationTable(num){
    // return x.toString();
    var output = ""
    for (i = 1; i < 11; i++){
        output += num + " x " + i + " = " + (num * i);
        if (i !== 10) {
            output += "\n";
        }
    }
    return output;
}
function returnEvenOddMessage(num){
   if (!Number.isInteger(num)) return num + " is invalid";
   if (num%2 === 0) return num + " is even";
   else return num + " is odd";
}
function returnTenEvenOddMessages(){
    let output = "";
    for (i =0; i < 10; i++);
        output += returnEvenOddMessage(getRandomInt(20, 200));
        if (i < 9) output += '\n'
    console.log(returnTenEvenOddMessages())
 return output
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function returnNumberSail() {
    let str = ''
    for (let i = 1; i < 10; i++) {
        let j = i.toString()
        str += j.repeat(i);

        if (i !== 9) str += '\n'
    }
    return str;
}