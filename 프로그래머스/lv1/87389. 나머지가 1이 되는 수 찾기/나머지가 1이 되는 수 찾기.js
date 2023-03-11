function solution(n) {
    let Arr = new Array(n-1)
    let newArr = Arr.fill(0).map((item,i)=>item=i+1)
    let answer = 0;
    answer = newArr.filter((item)=>n%item===1)[0]
   
    return answer;
}