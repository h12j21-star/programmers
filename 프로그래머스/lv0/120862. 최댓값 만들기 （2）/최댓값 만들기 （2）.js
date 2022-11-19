function solution(numbers) {
    numbers.sort((a,b)=>a-b)
    let fSum = numbers[0]*numbers[1]
    let bSum = numbers[numbers.length-2]*numbers[numbers.length-1]
    if(fSum > bSum){
        return fSum
    }
    else{
        return bSum
    }
   
}