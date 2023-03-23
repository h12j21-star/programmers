const isPrimie = (n) => {
    const prime = {};
    for(let i=2;i<=Math.ceil(Math.sqrt(n));i++){
        if(prime[n]){
            break;
        }
        if(prime[i]){
            continue;
        }
        for(let j=i**2;j<=n; j+=i){
            prime[j] = true
        }
    }
    return !prime[n]
}
function solution(nums) {
    let answer = 0;
    let cur = 0;
    let arr = []
    nums.sort((a,b)=>a-b);
    console.log(nums)
    for (let i = 0; i<nums.length;i++){
        for(let j = i+1; j<nums.length;j++){
            for(let z = j+1;z<nums.length;z++){
                arr.push([nums[i],nums[j],nums[z]])
            }
        }
    }
    let newArr = []
    arr.forEach((item)=>{
        let sum = 0
       sum = item.reduce((arr,cur)=>{
          return arr+cur
        },0)
        if(isPrimie(sum)){
            console.log(sum)
            answer++
        }
    })
    return answer;
}