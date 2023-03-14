function solution(arr) {
    let answer = [];
    let min = arr[0];
    for(let i=0;i<arr.length;i++){
        if(min>=arr[i]){
            min=arr[i]
        }
    }
    answer = arr.filter((item)=>item!==min)
    if(answer.length<=0){
        return [-1]
    }
    return answer;
}