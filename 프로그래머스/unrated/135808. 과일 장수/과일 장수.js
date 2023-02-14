function solution(k, m, score) {
    let answer = 0;
    let sortScore = score.sort((a,b)=>b-a);
    let arrlen = sortScore.length
    for(let i=m-1;i<arrlen;i+=m){
      //  let s = sortScore.join('').substr(i,m);
        answer+=(sortScore[i]*m)
    }
    
    return answer;
}