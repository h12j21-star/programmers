// today : yyy.mm.dd 오늘날짜
// terms : [알파벳 대문자 공백 개인정보 저장가능 달 수]
// privacies : [개인정보가 수집된 날짜 공백 terms에 나타난 약관 종류]
// privacies의 날짜에서 오늘날짜를 뺀다
// privacies의 terms와 terms를 비교하여 유효한 기간인지 판단한다.
function solution(today, terms, privacies) {
    let mm =[]
    let yy =[]
    let dd =[]
    let answer=[];
    let obj = {};
    let todayS = today.split('.')
    terms.forEach((item,i)=>{
        let term = item.split(' ')[0]
        obj[term] = item.split(' ')[1]
        
    })
 privacies.forEach((item,i)=>{
     mm = parseInt(item.split(' ')[0].split('.')[1]);
     yy = parseInt(item.split(' ')[0].split('.')[0]);
     dd = parseInt(item.split(' ')[0].split('.')[2]);
     term = item.split(' ')[1]
     mm += parseInt(obj[term]) 
     if(mm>12){
         yy += Math.floor(mm/12)
         if(mm%12===0){
             mm=12;
             yy-=1
         }
         else{
               mm %= 12
         }
     }
     console.log(yy,mm,dd)
     if(parseInt(yy) < parseInt(todayS[0])){
         answer.push(i+1)
     }else if(parseInt(yy) === parseInt(todayS[0])){
         if(parseInt(mm)<parseInt(todayS[1])){
             answer.push(i+1)
         }else if(parseInt(mm)===parseInt(todayS[1])){
             if(parseInt(dd)<=parseInt(todayS[2])){
               answer.push(i+1)
         }
             }
            
     }
 })
    return answer ;
}
                   