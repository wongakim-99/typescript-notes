// 매개변수 타입 표기
function greet(name:string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}

function add(num1:number, num2:number) {
    const result = num1 + num2;

    console.log("num1 + num2 = ", result);
}

greet("김가원");
add(1, 8);
// greet(42);  // -> 컴파일 에러! -> 매개변수에 타입이 표기되었다면, 해당 함수에 대한 인자는 검사가 이루어짐

/*********************************************************************************** */

// 반환 타입 표기
function getFavoriteNumber():number {
    return 33;
}

function multiplex(num1:number, num2: number) {
    const result = num1 * num2;
    return result;
}

console.log("favorite number is = ", getFavoriteNumber());
console.log("multiplex result is = ", multiplex(6, 78));