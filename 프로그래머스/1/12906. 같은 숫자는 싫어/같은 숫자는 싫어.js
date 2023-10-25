function solution(arr)
{
    let answer=[];
    let len = arr.length
    for(let i=0;i<arr.length;i++){
        answer.push(arr[i])
        if(arr[i]===arr[i+1]){
            answer.pop()
        }
    }
    
    return answer;
}