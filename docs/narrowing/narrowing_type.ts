function padLeft(padding: number | string, input: string): string {
    throw new Error("Not implemented yet!");
}

function printValue(value : string | number) {
    if (typeof value === 'string') {
        console.log(`문자열 길이 : ${value.length}`);  // 문자열로 확실히 좁혀짐
    } else {
        console.log(`2배 값 : ${value * 2}`);  // 숫자로 확실히 좁혀짐
    }
}

printValue(3);
printValue("김가원");

padLeft(3, "test");