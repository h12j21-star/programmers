function solution(video_len, pos, op_start, op_end, commands) {
    const [min,second] = pos.split(':');
    const [startMin,startSecond] = op_start.split(':');
    const [endMin,endSecond] = op_end.split(':');
    const posSecond = parseInt(min* 60) + parseInt(second);
    const op_startSecond = parseInt(startMin * 60) + parseInt(startSecond);
    const op_endSecond = parseInt(endMin * 60) + parseInt(endSecond);
    const totalSecond = parseInt(video_len.split(':')[0] * 60) + parseInt(video_len.split(':')[1])
    let answer = posSecond;
    
    if(answer > op_startSecond && answer < op_endSecond){
            answer = op_endSecond
     }
    
    for(const element of commands){
        if(element==='next'){
            answer = answer + 10
        }else if(element === 'prev'){
            answer = answer - 10
        }
        if(answer < 10) {
            answer = 0;
        }if(totalSecond - answer < 10 ){
            answer = totalSecond
        }
        if(answer >= op_startSecond && answer <= op_endSecond){
            answer = op_endSecond
        }
    }
    const answerMin = (Math.floor(answer / 60)).toString();
    const answerSecond = (answer - (answerMin*60)).toString();
    answer = `${answerMin < 10 ? answerMin.padStart(2,0) : answerMin}:${answerSecond < 10 ? answerSecond.padStart(2,0) :answerSecond.padEnd(2,0)}`
    
    return answer;
}