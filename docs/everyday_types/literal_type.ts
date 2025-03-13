let changingString = "Hello World";
changingString = "Hello";
// 변수 'changingString'의 어떤 문자열이든 모두 나타낼 수 있음
// 이는 TS의 타입 시스템에서 문자열 타입 변수를 다루는 방식과 동일
console.log(changingString);

const constantString = "Hello World";
// constantString = "Hello";
// 변수 'constantString'의 타입은 문자열 리터럴 "Hello World"로 고정되어 있음
// 이는 리터럴 타입의 표현 방식
console.log(constantString);

/************************************************************** */

// 1. 리터럴 타입의 정의 (기본 문법)
type LiteralType = "값1" | "값2" | "값3";

/************************************************************** */

// 2. 기본 예시
type Direction = "up" | "down" | "left" | "right";

function move(direction : Direction) {
    console.log(`moving ${direction}`);
}

move("up");
move("down");
move("left");
move("right");
// "up" | "down" | "left" | "right" 중 정확히 일치하는 값만 허용

/************************************************************** */

// 3. 문자열 리터럴 타입
type Status = "success" | "failuer" | "error";

function getStatus(status : Status) {
    if (status === "success") {
        console.log("print status " + status);
    } else if (status === "failuer") {
        console.log("print status " + status);
    } else {
        console.log("print status " + status);
    }
}

getStatus("success");
getStatus("failuer");
getStatus("error");
// getStatus("loading");

/************************************************************** */

// 4. 숫자 리터럴 타입
type DiceStatus = 1 | 2 | 3 | 4 | 5 | 6;

function getNumberStatus(status : DiceStatus) {
    console.log(`rolling ${status}`);
}

getNumberStatus(1);
getNumberStatus(2);
getNumberStatus(3);
getNumberStatus(4);
getNumberStatus(5);
getNumberStatus(6);
// getNumberStatus(7);  // 오류 발생

/************************************************************** */

// 5. 혼합
type MixedType = "Hello" | 235 | true | { a: string};

function getMixedValue(value : MixedType) {
    if (typeof value === "string") {
        console.log(`string value : ${value}`);
    } else if (typeof value === "number") {
        console.log(`number value : ${value}`)
    } else if (typeof value === 'boolean') {
        console.log(`boolean value : ${value}`);
    } else {
        console.log(`object value : ${
            JSON.stringify(value)
        }`);
    }
}

getMixedValue("Hello");
getMixedValue(235);
getMixedValue(true);
getMixedValue({ a: "김가원" });
