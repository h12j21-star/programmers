function solution(slice, n) {
    let answer = 0;
    
    return (n%slice === 0) ? Math.floor(n/slice)  : Math.floor(n/slice) + 1;
}