function solution(array) {
    let answer = 0;
    array.sort((a,b)=>a-b);
    //짝수
    if(array.length %2===0){
        return array[(Math.floor(array.length/2))-1]
    } 
    else{
       return array[(Math.floor(array.length+1)/2)-1]
    }
    
}