function solution(cards1, cards2, goal) {
    let answer = '';
    let card1Arr = [] 
    goal.forEach((item)=> card1Arr.push(cards1.indexOf(item)));
    let card1 = card1Arr.filter((item)=>item!==-1)
    let card2Arr = []
    goal.forEach((item)=>card2Arr.push(cards2.indexOf(item)));
     let card2 = card2Arr.filter((item)=>item!==-1)
     if(card1.filter((item,i)=>item!==i).length+card2.filter((item,i)=>item!==i).length > 0)
     {return "No"}
    else {return 'Yes'}

}