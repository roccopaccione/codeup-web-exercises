/ queryUser function
function queryUser() {
    let num
    while (true) {
        num = prompt("Please enter an odd number between 1 and 50.")
        num = Number(num)
        if (Number.isInteger(num)) {
            if (num%2 === 1) {
                if (num >= 1 && num <= 50) {
                    break;
                }
            }
        }
        alert('Invalid entry:\n' +
            num + ' is not an odd number between 1 amd 50')
    }
    // process data
    let output = 'Number to skip is: ' + num + '\n\n'
    num = Number(num)
    for (let i = 1; i <= 50; i += 2) {
        if (i === num) {
            output += 'Yikes! Skipping number: ' + num + '\n'
            continue
        }
        output += i
        if (i < 49) output += '\n'
    }
    console.log(output)
}