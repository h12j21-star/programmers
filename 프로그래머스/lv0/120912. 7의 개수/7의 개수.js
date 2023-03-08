function solution(array) {
    let answer = 0;
    let str = array.join("").split("")
    answer = str.filter((item)=>item==='7').length
    return answer;
}