const readline = require("readline");

const reader = readline.createInterface({
input: process.stdin,
output: process.stdout});

function calc (input) {
    console.log('*** Welcome to calculator! *** \n\n + for addition \n - for subtraction \n x for multiplication \n / for division \n\(number\) sqrt for getting the square root \n\nType EXIT to terminate\n') 
    const tokens = input.split(' ');
        
    const mathSymbol = tokens[1];
    const num1 = Number(tokens[0]);
    const num2 = Number(tokens[2]);

    if (mathSymbol === '+') {
        return num1 + num2 + '\n';
    } else if (mathSymbol === '-') {
        return num1 - num2 + '\n';
    } else if (mathSymbol === 'x') {
        return num1 * num2 + '\n';
    } else if (mathSymbol === '/') {
        return num1 / num2 + '\n';
    } else if (mathSymbol === 'sqrt') {
        return Math.sqrt(num1) + '\n';
    }
    
while (true) {
    const to_calc = reader.question("What would you like to calculate? ")
    console.log(calc(to_calc))
    reader.close()
    if (num1 === 'exit' || 'EXIT' || 'Exit') {
        console.log('\nEXIT');
        break};
}};