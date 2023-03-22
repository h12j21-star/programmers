function solution(n, m, section) {
    let answer = 0;
    let max = 0;
    let cur = 0;
    max = 0;
    section.forEach(item=>{
        if(max < item){
            max = item + m - 1
            answer++;
        }
    })
    
    return answer;
}