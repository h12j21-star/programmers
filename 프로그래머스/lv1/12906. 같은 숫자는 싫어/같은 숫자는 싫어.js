function solution(arr)
{
    let answer=[];
    let len = arr.length
    for(let i=0;i<len;i++){
        if(i===0){
             answer.push(arr[i])
        }else{
            if(answer[answer.length-1]!==arr[i]){
                answer.push(arr[i])
            }
        }
       
    }
    
    return answer;
}