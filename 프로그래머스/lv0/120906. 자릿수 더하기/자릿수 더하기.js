function solution(n) {
     //reduce (반환값 누적,처리할 현재 요소)
   return String(n).split("").reduce((a,c)=>a+parseInt(c),0) ;

}