function solution(keymap, targets) {
    let answer = [];
    let obj = {}
    let sum = 0;
    keymap.forEach((key,i)=>{
        key.split('').forEach((item,j)=>{
            obj[item] = obj[item] < j+1 ? obj[item] : j+1
        })
    })
    for(let i = 0;i<targets.length;i++){
        sum = 0;
        for(let j=0;j<targets[i].length;j++){
             if(!obj[targets[i][j]]){
                sum=-1
                 j=targets[i].length
            }else{
               sum += obj[targets[i][j]]
            }
        }
            answer.push(sum)
        
    }
    return answer
}