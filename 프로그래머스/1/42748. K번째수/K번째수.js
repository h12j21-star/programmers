function solution(array, commands) {
    let answer = [];
    commands.forEach((command)=>{
        let i = command[0];
        let j = command[1];
        let k = command[2];
        let s = array.slice(i-1,j);
        s.sort((a,b)=>a-b);
        answer.push(s[k-1])
        
    })
    return answer;
}