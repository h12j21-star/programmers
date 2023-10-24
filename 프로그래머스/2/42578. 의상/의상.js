function solution(clothes) {
    let answer = 1;
    let clothesObj = {}
    clothes.forEach((cloth)=>{
    clothesObj[cloth[1]]=== undefined ? clothesObj[cloth[1]] = 1 : clothesObj[cloth[1]]++
    })
       Object.entries(clothesObj).forEach(([key,value])=>{
       answer *= value+1
      
    })
    return answer-1;
}