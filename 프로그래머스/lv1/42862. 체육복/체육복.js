function solution(n, lost, reserve) {
    let answer = 0;
    let total = new Set([...lost,...reserve])
    let dedu = [...reserve];
    dedu.sort((a,b)=>a-b)
    answer = n-total.size
    reserve.forEach((item,idx)=>{
        if(lost.indexOf(item)>=0){
            //reserve.splice(idx,1)
            console.log("중복",item)
            console.log(dedu.indexOf(item))
            console.log("reserveIndexOf",dedu.indexOf(item))
            dedu.splice(dedu.indexOf(item),1)
            lost.splice(lost.indexOf(item),1)
            answer++  
        }
    })
  console.log("dedu",dedu,"lost",lost)
    let reserveLen = dedu.length;
    let deduLost=[...lost];
    deduLost.sort((a,b)=>a-b)
    for(let i=0;i<dedu.length;i++){
        for(let j=0;j<lost.length;j++){
        if(dedu[i]-1===deduLost[j] || dedu[i]+1===deduLost[j]){
            console.log("lost",lost[j],"reserve",dedu[i])
            deduLost.splice(deduLost.indexOf(deduLost[j]),1)
              answer++;     
            console.log("deduLost",deduLost)
            
          }
        }
   
    }
         answer+=reserveLen

    return answer
}