function solution(cipher, code) {
    let answer = [];
    answer = cipher.split('').filter((item,index)=>((index+1)%code ===0)).join("")
    return answer;
}