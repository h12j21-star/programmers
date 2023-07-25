function solution(seoul) {
    let answer = '';
    seoul.forEach((item,index)=>{
        if(item==="Kim")
            answer = "김서방은 "+index+"에 있다"
    })
    return answer;
}