function solution(numbers, direction) {
   
    if(direction === "right"){
        let first = numbers.splice(numbers.length-1,1)
      numbers.splice(0,0,first[0])
        
    }
    else{
         let last = numbers.splice(0,1)
       numbers.splice(numbers.length,0,last[0])
    }
    return numbers
}