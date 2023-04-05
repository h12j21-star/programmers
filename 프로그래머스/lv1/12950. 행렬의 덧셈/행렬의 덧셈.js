function solution(arr1, arr2) {
    let answer=[];
    let sum = [];
    arr1.forEach((item,i)=>{
        sum = []
        item.forEach((el,j)=>{
            sum.push(el+arr2[i][j])
            
        })
        answer.push(sum)
    })
    return answer;
}