let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split(' ');
const len = Number(input[0]);
const position = Number(input[1]);

let num = 1;

let array = Array.from({ length: len }, (_, i) => i + 1);

let result = [];

while (array.length) {

    let data = array.shift();

    if (num % position === 0) {

        result.push(data);

    } else {

        array.push(data);

    }

    num++;

}

console.log(`<${result.join(', ')}>`)