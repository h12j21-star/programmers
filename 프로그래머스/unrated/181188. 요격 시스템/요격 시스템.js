function solution(targets) {
    let answer = 0;
    let prev=-1;
    targets.sort((a,b)=>a[1]-b[1])
    for(let i in targets){
        const [a,b] = targets[i]
          if(prev<=a){
            prev=b
            answer++
    }
    }
  
 
    return answer;
}