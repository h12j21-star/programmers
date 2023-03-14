function solution(arr) {
    let answer = arr.reduce((arr,cur)=>{
        return arr+cur  
    },0)
    return answer/arr.length;
}