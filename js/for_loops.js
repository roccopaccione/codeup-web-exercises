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
    return num.toString();
}
