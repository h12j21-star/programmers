function solution(sizes) {
    let answer = 0;
    let second = []
    // 가로길이로 내림차순
    //sizes.sort((a,b)=>(b[0]*b[1])-(a[0]*a[1]));
   sizes.forEach((item)=>{
       item.sort((a,b)=>b-a)
   })
   sizes.sort((a,b)=>b[0]-a[0])
   answer = sizes[0][0]
   sizes.sort((a,b)=>b[1]-a[1])
   answer *= sizes[0][1]
    return answer
}