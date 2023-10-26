function solution(progresses, speeds) {
    let answer = [];
    let obj = {};
    let count = 0;
    progresses.forEach((progress,index)=>{
        let last = Math.ceil((100-progress) / speeds[index])
        obj[index] = last
    })
     let max = obj[0];
    for(let [key,value] of Object.entries(obj)){
        if(max>=value){
             count++;
        }
        else if(max<value){
            max=value
            answer.push(count)
            count=1;
            
        }
        
    }
    answer.push(count)
    return answer;
}