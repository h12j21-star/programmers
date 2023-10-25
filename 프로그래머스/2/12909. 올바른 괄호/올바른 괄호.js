function solution(s){
    let answer = true;
    let stack = []
    s.split('').forEach((item)=>{
            if(item==='('){
                stack.push('(')
            }else if(item===')'){
                if(stack.pop()===undefined){
                    answer = false;
                    return answer;
                    
                }
                
                
            }
    })
    if(stack.length!==0){
        answer= false;
    }
    return answer
}