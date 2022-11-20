function solution(box, n) {
    return box.map((item)=>parseInt(item/n)).reduce((a,c)=>a*c,1)
}