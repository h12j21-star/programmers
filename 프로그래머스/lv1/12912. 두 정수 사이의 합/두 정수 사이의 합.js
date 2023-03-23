function solution(a, b) {
    if(a===b){
        return a
    }
    let len = Math.abs(b-a)
    let arr = new Array(len+1);
    let small = a<b ? a : b
    let numArr = arr.fill(small).map((item,i)=>item=i+item)
    let answer = numArr.reduce((arr,cur)=>{
        return arr+cur
    },0)
    return answer;
}