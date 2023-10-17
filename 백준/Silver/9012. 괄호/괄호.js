let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let len = input.shift();
let stack = [];
let result = 'YES';
for (let i = 0; i < len; i++) {
    let stack = [];
    let result = 'YES';
    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] === '(') {
            stack.push('(');
        } else if (input[i][j] === ')') {
            if (!stack.pop()) {
                result = 'NO';
            }
        }
    }
    if (stack.length !== 0) {
        result = 'NO';
    }
    console.log(result);
}