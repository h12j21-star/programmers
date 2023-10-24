function test(student,answers){
    let j=0
    let answer=0
    for(let i=0;i<answers.length;i++,j++){
         if(j===student.length){
            j=0
             
        }
        if(student[j]===answers[i]){
            answer++;
        }
    }
    return answer
    
}
function solution(answers) {
    let answer = [];
    let one = [1, 2, 3, 4, 5]
    let two = [2, 1, 2, 3, 2, 4, 2, 5]
    let three = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    let a = [test(one,answers),test(two,answers),test(three,answers)]
    let max = 0;
    a.forEach((item)=>{
        if(item>=max){
            max=item
        }
    })
    if(max===0){
        return 0
    }
   answer = a.reduce((arr,cur,idx)=>{
       if(cur===max){
           arr.push(idx+1)
       }
       return arr
   },[])
    return answer;
}
