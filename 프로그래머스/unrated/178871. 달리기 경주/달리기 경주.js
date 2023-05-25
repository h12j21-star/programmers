function solution(players, callings) {
let map = new Map();
let map2 = new Map();
let playerscore
let playername
let frontplayer
let frontplayerscore
    players.forEach((item,idx)=>{
        map.set(item,idx)
        map2.set(idx,item)
    })
    callings.forEach((item,idx)=>{
        if(map.get(item)!==0){
            //추월선수점수
             playerscore = map.get(item);
            //추월선수 이름
            playername = map2.get(playerscore)
            //앞플레이어 이름 
             frontplayer = map2.get(playerscore-1)
            //앞플레이어 점수
            frontplayerscore = map.get(frontplayer)
            map.set(playername,frontplayerscore)
            map.set(frontplayer,frontplayerscore+1)
            map2.set(frontplayerscore,playername)
            map2.set(frontplayerscore+1,frontplayer)
             
        }
    })
       let arr = []
    for (let [key, val] of map.entries()) {
       
      arr[val] = key
    }
    return arr
  }
 