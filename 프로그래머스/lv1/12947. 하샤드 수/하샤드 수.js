function solution(x) {
    let answer = true;
    let arr= String(x).split('')
    let sum = arr.reduce((arr,cur)=>{
        arr = arr+parseInt(cur)
     return arr
    },0);
    console.log(sum)
    if(x%sum !==0){
        answer=false
    }
    return answer;
}