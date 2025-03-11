type Point = {
    x : number;
    y : number;
};

// 앞서 object_type.ts 에서 사용한 것과 동일합니다.
// 새롭게 알게 된 사실 -> 글로벌 범위에서 같은 이름의 함수는 중복 선언이 불가능. 
// 따라서 함수 이름을 printCoord2 로 변경
// 만약 같은 이름의 함수를 사용하고 싶다면 함수 오버로딩을 하거나 모듈로 만들어야 함.
function printCoord2(pt : Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord2({x : 100, y : 200});

/*************************************************** */