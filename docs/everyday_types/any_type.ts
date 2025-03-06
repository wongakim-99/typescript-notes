// 타입 안정성x

let age : number;
age = "12" as any;
age += 1;

console.log(age);

////////////////////////////////////////////
/**이렇게 해도 에러가 나지 않습니다. */
let num1 : any = "1";
let num2 : any = 2;
let num3 : any = "김가원";
let num4 : any = true;

const num5 = num1 + num2 + num3 + num4; 

console.log(num5);



/******************************** */
// noImplictAny 설정 false

// function add(a, b) {  -> tsconfig.json 파일의 noImplictAny 타입을 true 로 설정했을 시 -> 컴파일 오류!
//     return a + b;
// }

const num6 = 112;
const num7 = 10;

// console.log(add(num6, num7));