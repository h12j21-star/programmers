function solution(nums) {
    let answer = 0;
    let a = nums/2;
    let obj = {};
 nums.forEach((item)=>{
     if(obj[item]){
         obj[item]++;
     }else{
         obj[item]=1;
     }
 })
let itemLen = Object.keys(obj).length
if(itemLen >= Math.floor(nums.length/2)){
    answer = Math.floor(nums.length/2);  
}else{
    answer = itemLen
}
  
    return answer;
}