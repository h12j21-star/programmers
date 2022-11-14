function solution(my_string) {
    let answer = [];
    let numArr = my_string.match(/[0-9]/g).map((i)=>parseInt(i)).sort((a,b)=>a-b)
    
    return numArr
}