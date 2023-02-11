function solution(t, p) {
    let answer = 0;
    let sliceArr=[]
    for (let i in t){
    sliceArr.push(t.substr(i,p.length)) 
        
    }
     answer = sliceArr.filter(item=>item.length===p.length)
     answer = (answer.filter((item)=>item<=p)).length
 
    return answer;
}