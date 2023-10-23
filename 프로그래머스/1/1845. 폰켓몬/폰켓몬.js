function solution(nums) {
    const N = nums.length/2
    //{3:2,2:1,2:1}
    const poketmon = {}
    nums.forEach((el,idx)=>{
        poketmon[el]=el;
    })

    const poketmonN = Object.keys(poketmon).length;
    if(poketmonN>=N){
        return N;
    }else if(poketmonN<N){
        return poketmonN
    }
}