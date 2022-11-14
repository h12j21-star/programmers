function solution(my_string) {
    let answer = '';
    for(let i of my_string){
        if(i=='a'||i=='e'||i=='i'||i=='o'||i=='u'){answer}
        else {
            answer += i;
        }
    }
    return answer;
}