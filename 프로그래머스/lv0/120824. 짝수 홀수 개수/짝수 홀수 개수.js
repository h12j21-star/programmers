function solution(num_list) {
    let answer = [];
    let even = num_list.filter(i=>i%2===0)
    let notEven = num_list.filter(i=>i%2!==0)
    answer.push(even.length);
    answer.push(notEven.length);
    return answer
}