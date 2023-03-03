function solution(numbers, hand) {
    let answer = '';
    let obj = {}
    let Lcurr = "*";
    let Rcurr = "#";
    let left = [1,4,7,"*"];
    let right = [3,6,9,"#"];
    let middle = [2,5,8,0];
    let h = hand==='left' ? "L" : "R"  
    left.forEach((item,i)=>obj[item]=[i,0])
    right.forEach((item,i)=>obj[item]=[i,2])
    middle.forEach((item,i)=>obj[item]=[i,1])
    numbers.forEach((item)=>{
        if(left[0] === item || left[1] === item || left[2] ===item){
            Lcurr = item;
            answer += "L"
        }else if(right[0] === item || right[1] === item || right[2] ===item ){
            Rcurr = item;
            answer += "R"
        }else {
            let L = Math.abs(obj[Lcurr][0]-obj[item][0]) + Math.abs(obj[Lcurr][1]-obj[item][1]);
            let R =  Math.abs(obj[Rcurr][0]-obj[item][0]) + Math.abs(obj[Rcurr][1]-obj[item][1]);
        if(L<R){
            answer += 'L'
            Lcurr = item
            
        }else if(L>R){
            answer += 'R'
            Rcurr = item
        }else {
            answer += h
            if(h==="L"){
                Lcurr=item
            }else{
                Rcurr=item
            }
        
        }
        }
     
    
    })  
    return answer;
    }
      