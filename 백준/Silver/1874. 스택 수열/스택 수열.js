const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map((item) => Number(item));

let len = input.shift();
let stack=[];
let result = []
let j = 1;
for(let i = 0; i<len;i++){
    while(j<=input[i]){
        result.push('+');
        stack.push(j);
        j++
    }
    let num = stack.pop()
    if(num!==input[i]){
          result=['NO'];
            break;

    }
   result.push('-');
}
console.log(result.join("\n"))