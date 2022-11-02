function solution(N, stages) {
    var answer = [];
    let 실패율 =[]
    let 유저수 = stages.length
    for(let i=1;i<=N;i++){
        let 도달한사람수 = stages.filter((user)=>user===i).length
       let 확률 =  도달한사람수 / 유저수
          실패율.push({stages:i,확률})
        유저수 -= 도달한사람수
      
    }
    실패율.sort((a,b)=>b.확률-a.확률)
    return 실패율.map((i)=>i.stages)
}