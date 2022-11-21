function solution(my_string) {
    let answer = [];
   let lower= my_string.toLowerCase()
   for(let i =0;i<lower.length;i++){
       answer.push(lower.charCodeAt(i))
   }
    return answer.sort((a,b)=>a-b).map((item)=>item=String.fromCharCode(item)).join('')
}