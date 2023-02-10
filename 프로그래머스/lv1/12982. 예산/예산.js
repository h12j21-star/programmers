function solution(d, budget) {
    let answer = 0;
    let sortD = d.sort((a,b)=>a-b)
    sortD.forEach((item)=>{
        console.log(budget)
        if(item<=budget){
            answer+=1;
            budget-=item
        }

    })
    return answer;
}