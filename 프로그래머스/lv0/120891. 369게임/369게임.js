function solution(order) {
    let orderArr = [...(""+order)];
    return orderArr.filter((i)=>i==='3' || i==='6' || i==='9').length
    //return order.toString().match(/[369]/g).length
}