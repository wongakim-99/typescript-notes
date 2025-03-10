function printValue(value : string | number) : void {
    console.log(`값 : ${value}`);
}

printValue("Hello");
printValue(100);
// printValue(true);  // 오류 발생

/*************************************************** */

// 유니온 타입과 타입 가드(Type Guard)
// function printId(id : number | string) : void {
//     console.log(id.toUpperCase());  // 컴파일 오류!
// }


// 1. typeof 연산자를 사용한 타입 가드
function processInput(input : string | number) : void {
    if (typeof input === "string") {
        console.log(`문자열의 길이 : ${input.length}`);
    } else {
        console.log(`숫자의 제곱 : ${input ** 2}`);
    }
}

processInput("TypeScript");  // 문자열의 길이 : 10
processInput(10);  // 숫자의 제곱 : 16

/*************************************************** */

// 2. instanceof 연산자를 사용한 타입 가드
// instanceof 는 객체가 클래스 유형을 판별하는 데 사용됩니다.
class Dog {
    bark() {
        console.log("멍멍!");
    }
}

class Cat {
    meow() {
        console.log("야옹!");
    }
}

type Pet = Dog | Cat;

function makeSound(pet : Pet) : void {
    if (pet instanceof Dog) {
        pet.bark();  // Dog 타입일 경우에만 호출 가능
    } else {
        pet.meow();  // Cat 타입일 경우에만 호출 가능
    }
}

makeSound(new Dog());  // 멍멍!
makeSound(new Cat());  // 야옹!

/*************************************************** */