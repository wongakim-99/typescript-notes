// 아래의 코드는 TS 에서 typeof 연산자를 Type Guards 로 사용할 때의 한계점과 그로 인해 발생할 수 있는 오류
// function printAll(strs: string | string[] | null) {
//     if (typeof strs === "object") {  // 에러! -> strs 는 null 일 수도 있음
//         for (const s of strs) {
//             console.log(s);
//         }
//     } else if (typeof strs === "string") {
//         console.log(strs);
//     } else {
//         // do nothing
//     }
// }

// 위의 오류에서 해결 방법 1 : null 체크 추가
function printAll(strs: string | string[] | null) {
    if (typeof strs === "object" && strs !== null) {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log("Hello");
    } else {
        // do anything
        console.log("TS STUDY");
    }
}

printAll(null);
printAll("Hello TS");
printAll(["김가원", "김호준", "가가원", "김호돌"]);

// 맨 위의 코드에서 오류 해결 방법 2 : Array.isArray() 사용
function printAll2(strs : string | string[] | null) {
    if (Array.isArray(strs)) {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    } else {
        // do anything
    }
}

printAll2(null);
printAll2("이승우");
printAll2(["null", "back", "in", "black", "AC/DC", "Rock and roll"]);