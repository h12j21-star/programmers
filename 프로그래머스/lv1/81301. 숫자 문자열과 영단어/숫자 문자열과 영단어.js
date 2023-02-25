function solution(s) {
    let answer = "";
    let numArr = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    
    numArr.forEach((str,idx)=>{
        s = s.replaceAll(str,idx)
        
    })
    return parseInt(s);
}