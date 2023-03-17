function solution(wallpaper) {
    let answer = [];
    let twoArr = [];
    let a = [];
    wallpaper.forEach((oneItem,i)=>{
        oneItem.split('').forEach((twoItem,j)=>{
            if(twoItem === '#'){
                twoArr.push([i,j])
            }
        })
    })
    let x=[]
    let y=[]
    twoArr.forEach((item,i)=>{
            x.push(item[0]);
        y.push(item[1])
    })
 
    return [Math.min(...x),Math.min(...y),Math.max(...x)+1,Math.max(...y)+1];
}