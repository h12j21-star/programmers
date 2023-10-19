let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let str = input.shift();
let len = Number(input.shift());
let stack = str.split('').map((item) => item);
let array = [];


for (let i = 0; i < len; i++) {
    let [cmd, value] = input[i].split(' ');
    switch (cmd) {
        case 'P':
            stack.push(value);
            break;
        case 'L':
            if (stack.length > 0) {
                array.push(stack.pop());
            }
            break;
        case 'D':
            if (array.length > 0) {
                stack.push(array.pop());
            }
            break;
        case 'B':
            stack.pop();
            break;
    }
}
let answer = stack.join('');
answer += array.reverse('').join('');
console.log(answer);