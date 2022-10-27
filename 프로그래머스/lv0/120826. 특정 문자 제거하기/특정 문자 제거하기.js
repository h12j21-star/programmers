function solution(my_string, letter) {
    let answer = [];
    answer = my_string.split("").filter(i=>
        i !== letter
    )

    return answer.join("");
}