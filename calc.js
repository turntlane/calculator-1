const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("add = +\nsubtract = -\nmultiply = *\ndivide = /\nsquare root = sqrt\nsquared = **\ncubed = cube\npower of = ^\nremainder = %\nWhat would you like to calculate?"
, function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);
	num3 = Number(tokens[3]);

	if (num3) {
		console.log('You can only use 2 numbers.')
		return;
	}
	if ( mathSymbol === '+') {
		console.log(num1 + num2);
	}else if ( mathSymbol === '-') {
		console.log(num1 - num2);
	}else if ( mathSymbol === '*') {
		console.log(num1 * num2);
	}else if ( mathSymbol === '/') {
		console.log(num1 / num2);
	}else if ( mathSymbol === 'sqrt') {
		console.log(num1 ** .5);
	}else if ( mathSymbol === '**') {
		console.log(num1 ** 2);
	}else if ( mathSymbol === 'cube') {
		console.log(num1 ** 3);
	}else if ( mathSymbol === '^') {
		console.log(num1 ** num2);
	}else if ( mathSymbol === '%') {
		console.log(num1 % num2);
	}
	else {
		console.log('That is not a correct input.')
	}

	// This line closes the connection to the command line interface.
	reader.close()

});
