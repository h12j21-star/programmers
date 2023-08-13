function solution(s) {
    let answer = '';
    let min = s.split(' ').sort((a,b)=>b-a)[0]
    let max = s.split(' ').sort((a,b)=>a-b)[0]
    answer = max+" "+min
    
    return answer;
}