function solution(numbers) {
    let answer = [];
    
    for(let i=0;i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){
            answer.push(numbers[i]+numbers[j])
        }
    }
    answer = answer.reduce((arr,cur)=>{
        if(! arr.includes(cur)){
            arr.push(cur)
        }
        return arr
    },[])
    return answer.sort((a,b)=>a-b);
}