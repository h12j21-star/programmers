function solution(my_str, n) {
    let answer = [];
    let arr = my_str.split('')
    for(let i = 0;i<my_str.length;i+=n){
        answer.push(arr.splice(0,n).join(''));
    }
    return answer
}