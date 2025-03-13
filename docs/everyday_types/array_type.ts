/**
 * # 배열(Array)
 */

// 숫자 배열 선언(number[])
const numbers:number[] = [1,2,3,4,5];
console.log("Numbers array : ", numbers);

// 문자열 배열 선언(string[])
const words: string[] = ["C", "Python", "Java", "TypeScript", "JavaScript"];
console.log("Strings array : ", words);

// 배열의 요소 접근
console.log("First Number : ", numbers[0]);  // 숫자 배열의 첫번째 요쇼에 접근
console.log("Second String : ", words[1]);

// Array<T> 문법 사용
const moreNumbers : Array<number> = [10, 20, 30];
console.log("More numbers array : ", moreNumbers);

