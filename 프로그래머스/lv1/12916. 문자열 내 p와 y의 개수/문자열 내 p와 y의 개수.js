function solution(s){
    let answer = true;
    let p = s.split('').filter((item)=>item==='p' | item==='P')
    let y = s.split('').filter((item)=>item==='y' | item==='Y')
    if(p.length===y.length)answer = true;
    else answer = false;

    return answer;
}