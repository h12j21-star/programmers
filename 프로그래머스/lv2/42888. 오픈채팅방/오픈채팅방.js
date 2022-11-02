function solution(record) {
    //방안에서 바꾸기 
    //방밖에서 바꾸기 - change
    //change - 출력하지 않음
    //state id name
  let user={}
 
        let answer = [];
    for(let list of record){
        let[state,id,name] = list.split(" ")
        if(state === 'Enter'){
            user[id]=name
           answer.push([id,'님이 들어왔습니다.'])
        }
        else if(state === 'Leave'){
         answer.push([id,'님이 나갔습니다.'])
        }
        else if(state === 'Change'){
             user[id]=name
             
        }
     
    }
      answer = answer.map(item=>user[item[0]]+item[1])
    return answer
 
}