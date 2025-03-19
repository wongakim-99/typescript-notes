// 1. 문제상황 -> repeat() 메서드는 숫자 데이터만 받을 수 있으나 유니언 타입에서 string 까지 허용하기 때문에 아래의 코드에서 에러 발생!
// function padLeft(padding: number | string, input: string): string {
//     return " ".repeat(padding) + input;
// }


// 2. 위와 같은 문제상황을 피하고자 number | string 처럼 여러 타입을 받을 수 있는 경우, 안전하게 특정 타입으로 제한하는 처리가 필요 -> 
// 이때 Narrowing 처리
function padLeft(padding : number | string, input : string) : string {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + input;  // padding 이 string 으로 확실히 좁혀진 상태
}

console.log(padLeft(4, "김가원"));


/******************************************************************************************************* */