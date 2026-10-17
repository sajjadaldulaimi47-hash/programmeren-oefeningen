// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let postcode;

do {
    postcode = parseFloat(await userInput.question('Geef een postcode: '));


} while (postcode < 1000 || postcode >= 9999);


for (let teller = 0; teller < 10; teller++) {
    console.log("1 * " + teller + " = " + (1 * teller));
}



for (let grondtal = 0 ; grondtal <= 128; grondtal **= 2) {
    console.log(grondtal);
}

process.exit();


