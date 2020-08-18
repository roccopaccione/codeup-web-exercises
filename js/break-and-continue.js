function userInput() {
    let num
    while (true) {
        num = prompt("Enter a number between 1 and 50.")
        if(isValidOddNumber(num) && num <= 50) break;
        alert('Invalid Entry:\n' +
        num + ' is not an odd number between 1 and 50.')
    }
}

function isValidOddNumber(num) {
    if(isNaN(num)) return false
    num = Number(num)
    if(!Number.isInteger(num)) return false
    return (num%2 === 1)
}

function getOddNumbers(skip) {
    if (isValidOddNumber(skip))
        return "Error: The skip value is not an odd number between 1 and 50"

    let output = 'Number to skip is: ' + skip
    for (var i = 1; i <= 50; i += 2) {
        if (i === skip) {
            output += 'Yikes! Skipping number: ' + skip + '\n'
            continue
        }
        output += i
        if (i < 49) output += '\n'
    }
}