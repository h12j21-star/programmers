const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let len = Number(input.shift());

let queue = [];
let result = [];
for (let i = 0; i < len; i++) {
    let str = input[i].split(' ')[0]
    let value = Number(input[i].split(' ')[1])
    switch (str) {
        case 'pop':
            queue.length > 0 ? result.push(queue.shift()) : result.push(-1);
            break;
        case 'size':
            result.push(queue.length);
            break;
        case 'empty':
            queue[queue.length - 1] ? result.push(0) : result.push(1);
            break;
        case 'front':
            queue.length > 0 ? result.push(queue[0]) : result.push(-1);
            break;
        case 'back':
            queue.length > 0
                ? result.push(queue[queue.length - 1])
                : result.push(-1);
            break;
        case 'push':
            queue.push(Number(value));
            break;
    }
}
console.log(result.join('\n'));