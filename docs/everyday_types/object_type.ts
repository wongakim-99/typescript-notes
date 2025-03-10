function printCoord(pt : { x : number, y : number }) {
    console.log("The coordinate's X value is " + pt.x);
    console.log("The coordinate's Y value is " + pt.y);
};

printCoord({ x : 3, y : 8});

/*************************************************** */

// 1. 타입 별칭(Type Alias)를 사용하여 객체 생성
type User = {
    name : string;
    age : number;
    nickname : string;
    email : string;
}

const user1 : User = {
    name : "김가원",
    age : 27,
    nickname : "gagawon",
    email : "kgw1999zz@naver.con"
}

const user2 : User = {
    name : "차현우 ",
    age : 26,
    nickname : "cha",
    email : "cha@naver.com"
}

function printUser(user : User) : void{
    console.log(`이름 : ${user.name}, 닉네임 : ${user.nickname}, 이메일 : ${user.email}, 나이 : ${user.age}`);
}

printUser(user1);
printUser(user2);

/*************************************************** */

// 2. 인터페이스를 사용하여 객체 생성
interface IUser {
    name : string;
    age : number;
    nickname : string;
    email : string;
}

const user3 : IUser = {
    name : "김호준",
    age : 29,
    nickname : "hodol",
    email : "hodol0301@naver.con"
}

const user4 : IUser = {
    name : "김수민",
    age : 24,
    nickname : "siuuuu",
    email : "siuuuu@naver.com"
}

function printUser2(user : IUser) : void{
    console.log(`이름 : ${user.name}, 닉네임 : ${user.nickname}, 이메일 : ${user.email}, 나이 : ${user.age}`);
}

printUser2(user3);
printUser2(user4);

/*************************************************** */

// 3. 선택적 프로퍼티를 사용하여 객체 생성(옵셔널 프로퍼티)
type GameUser = {
    nickname : string;
    level : number;
    age? : number;  // 선택적 프로퍼티
}

const user5 : GameUser = {
    nickname : "gagawon",
    level : 320,  // 정상 동작함
}

const user6 : GameUser = {
    nickname : "cha",
    level : 103,
    age : 26,  // 마찬가지로 정상 동작함
}

function printUser3(user : GameUser) : void{
    if (user.age !== undefined){
        console.log(`닉네임 : ${user.nickname}, 레벨 : ${user.level}, 나이 : ${user.age}`);
    } else {
        console.log(`닉네임 : ${user.nickname}, 레벨 : ${user.level}`);
    }
}

printUser3(user5);
printUser3(user6);



