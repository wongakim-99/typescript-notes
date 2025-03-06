/**
 * 1. 제네릭이 없는 경우(타입을 고정)
 * - 제네릭을 사용하지 않으면, 특정 타입에 종속된 함수를 만들 수밖에 없습니다.
 */

// 1-1. 숫자 배열에서 첫 번째 요소 반환
function getFirstNumber(arr:number[]):number {
    return arr[0];
}

// 1-2. 문자열 배열에서 첫 번째 요소 반환
function getFirstString(arr:string[]):string {
    return arr[0];
}

console.log(getFirstNumber([10, 20, 30]));
console.log(getFirstString(["A", "B", "C"]));