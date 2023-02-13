function solution(food) {
    let answer = '';
    food.forEach((item,i)=>{
        if(i>0){
           if(item/2>0 && item!==1){
            for(let j=0;j<Math.floor(item/2);j++){
                answer+= i;
            }
        } 
        }
        
    })
    answer += '0'+answer.split('').reverse().join('')
    return answer;
}