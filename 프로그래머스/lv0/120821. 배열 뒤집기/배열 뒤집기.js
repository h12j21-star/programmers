function solution(num_list) {
    let new_list=[]
    for(let i = num_list.length-1 ; i >= 0; i--){
        new_list.push(num_list[i])
    }
    return new_list;
}