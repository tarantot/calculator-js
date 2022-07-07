const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

console.log('*** Welcome to calculator! *** \n\n + for addition \n - for subtraction \n x for multiplication \n / for division \n\(number\) sqrt for getting the square root \n\nType EXIT to terminate\n')
  reader.question("What would you like to calculate? ", function (input) {
	const tokens = input.split(' ');
	
	const mathSymbol = tokens[1];
	const num1 = Number(tokens[0]);
	const num2 = Number(tokens[2]);
	reader.close()

    if (mathSymbol === '+') {
        console.log(num1 + num2 + '\n');
    } else if (mathSymbol === '-') {
        console.log(num1 - num2 + '\n');
    } else if (mathSymbol === 'x') {
        console.log(num1 * num2 + '\n');
    } else if (mathSymbol === '/') {
        console.log(num1 / num2 + '\n');
    } else if (mathSymbol === 'sqrt') {
        console.log(Math.sqrt(num1) + '\n');
    }
});
	//{	reader.close()
	//} else {
	//	console.log('TYPE CORRECT VALUES !!!\n')

//console.log(mathSymbol);
//console.log(num1);
//console.log(num2);