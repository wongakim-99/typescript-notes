/**
 * 2. 제네릭을 사용한 경우(타입을 유연하게) 
 */

// 제네릭 사용(T는 어떤 타입이든 될 수 있음)
function getFirst<T>(arr: T[]): T {
    return arr[0];
}

console.log(getFirst<number>([10, 20, 30]));
console.log(getFirst<string>(["김가원", "김영웅", "김호준", "박호영", "손호영"]));
console.log(getFirst<boolean>([true, false]));