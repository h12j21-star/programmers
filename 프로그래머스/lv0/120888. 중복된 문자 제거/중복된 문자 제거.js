function solution(my_string) {
    let answer = [];
   let strSet = new Set([...my_string])
  answer = Array.from(strSet);
    return answer.join("")
}