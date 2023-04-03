function solution(name, yearning, photo) {
    let answer = [];
    let idx;
    let sum = 0;
    for(let i = 0;i<photo.length;i++){
        sum=0;
        for(let j = 0; j<photo[i].length;j++){
            idx=0;
            idx = name.indexOf(photo[i][j]);
            if(idx===-1){
                continue;
            }
            sum += yearning[idx];
            console.log(sum)
        }
        answer.push(sum);
        
    }
    return answer;
}