function solution(s1, s2) {
    let answer = 0;
    let bigarr = s1.length>s2.length ? s1 : s2;
    let smallarr = s1.length<s2.length ? s1 : s2;
    if(s1.length===s2.length){
        bigarr=s1;
        smallarr=s2;
    }
    for(let i=0;i<bigarr.length;i++){
        if(smallarr.includes(bigarr[i])){
            answer++;
        }
         
    }
  
    return answer;
}