type Fish = {
    swim: () => void;
}

type Bird = {
    fly : () => void;
}

type Human = {
    swim?: () => void;
    fly?: () => void;
}

function move(animal : Fish | Bird) {
    if ("swim" in animal) {
        return animal.swim();
    } else {
        return animal.fly();
    }
}

// 옵셔널 프로퍼티가 적용되었을 때 할 수 있는 여러가지 방식1 -> Null 체크 추가
function move2 (animal:Fish | Bird | Human) {
    if ("swim" in animal) {
        return animal.swim?.();  // animal.swim 이 undefined 가 아닐 경우에만 호출
    } else {
        return animal.fly?.();   // 마찬가지로 animal.fly 가 undefined 가 아닐 경우에만 호출
    }
}

// 2. as 키워드를 통한 강제 캐스팅
function move3 (animal: Fish | Bird | Human) {
    if ("swim" in animal) {
        (animal as Fish).swim();
    } else {
        (animal as Bird).fly?.();
    }
}

// 3. Type Guard 방식을 사용한 TS 의 안정성 최대한 살리기
function isFish(animal : any) : animal is Fish {
    return typeof animal.swim === "function";
}

function isBird(animal: any) : animal is Bird {
    return typeof animal.fly === "function";
}

function move4 (animal : Fish | Bird | Human) {
    if (isFish(animal)) {
        animal.swim();
    } else if (isBird(animal)) {
        animal.fly();
    } else {
        console.log("아마도 사람일듯..?");
    }
}


move({swim: () => console.log("물고기가 수영을 합니다.")});
move({fly: () => console.log("새가 하늘을 납니다.")});

/******************************************************************/
