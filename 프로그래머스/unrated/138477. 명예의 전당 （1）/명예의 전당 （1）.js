function solution(k, score) {
    let answer = [];
    let scoreList = [];
    let swap=0;
    for(let i=0;i<score.length;i++){
        if(i<k){
            scoreList.push(score[i])
            scoreList.sort((a,b)=>b-a)
            
        }else{
            if(score[i]>scoreList[k-1]){
                scoreList[k-1] = score[i]
                scoreList.sort((a,b)=>b-a)
            }
        }
        answer.push(scoreList[scoreList.length-1])
    }
    return answer;
}