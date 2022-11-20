function solution(my_string) {
    let answer = 0;
    return my_string.split('').filter((i)=>+i).reduce((a,c)=>a+parseInt(c),0);
}