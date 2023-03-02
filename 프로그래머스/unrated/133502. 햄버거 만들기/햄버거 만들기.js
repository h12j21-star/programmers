function solution(ingredient) {
    let answer = 0;
    let store = []
    let strStore =""
     ingredient.forEach((item)=>{
        store.push(item)
        //strStore = [...store]
        if(store[store.length-1]===1&&
         store[store.length-2]===3&&
            store[store.length-3]===2&&
                store[store.length-4]===1){
            answer ++;
            store.splice(store.length-4,4)
            
        }
    })
   
    return answer;
}