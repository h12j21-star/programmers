function solution(emergency) {
    let answer = emergency;
    let obj={};
    emergency.map((item)=>{
        item
    })
    //사본만들기
    const sorted=[...emergency]
    sorted.sort((a,b)=>b-a)
   
    return emergency.map((v)=>sorted.indexOf(v)+1)
}