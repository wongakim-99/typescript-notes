function example(x: string | number, y : string | boolean) {
    if (x === y) {
        x.toUpperCase();
        y.toUpperCase();
        return `Both are strings : ${x.toUpperCase()}`;
    } else {
        console.log(x);
        console.log(y);
        return `x : ${x}, y : ${y}`
    }
}

console.log(example("asd", true));
console.log(example(4, true));
console.log(example("gawon", "hojun"));
console.log(example(5, "ggawon"));
console.log(example("gawon", "gawon"));

/***************************************************************** */

// 해당 코드에서는 if (strs !== null) 조건을 통해 null 이 아님을 보장하는 과정
function printAll3(strs : string | string[] | null) {
    if (strs !== null) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}

console.log(printAll3(null));
console.log(printAll3("gawon"));

/***************************************************************** */

// 2. null 체크를 통한 타입좁히기2

interface Container {
    value : number | null | undefined;
}

function multiplyValue(container : Container, factor : number) {
    // Remove both 'null' and 'undefined' from the type.
    if ((container.value != null) || (container.value != undefined)) {
        console.log(container.value);

        // Now we can safely multiply 'container.value';
        container.value *= factor;
        return container.value;
    } else if (container.value === null) {
        console.log("container value is null :(");
        
        return 0;
    } else {
        console.log("container value is undefined :(");
        return 0;
    }
}

console.log(multiplyValue({value : 5}, 6));
console.log(multiplyValue({value : null}, 10));
console.log(multiplyValue({value : undefined}, 10));