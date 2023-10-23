function solution(participant, completion) {
    let answer = ''; 
    let obj = {}
    participant.forEach((item)=>{
        obj[item] === undefined ? obj[item] = 1 : obj[item] ++
    })

  completion.forEach((item)=>{
      obj[item]--;
      if(obj[item]===0){
          delete obj[item]
      }
  })
  result = Object.keys(obj).join('')
  
    return result;
}