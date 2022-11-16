function solution(num, total) {
    let numArr = new Array(num);
    numArr.fill(Math.floor(total/num))
    console.log(numArr)
    let result = numArr.map((item,index)=>{
        item = (Math.floor(total/num)-(index-Math.floor(num/2)))
        return item
    })
    return result.sort((a,b)=>a-b);
}