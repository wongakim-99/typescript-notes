import * as readline from "readline";

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.on('line', (line) => {
    // 입력한 값을 처리하는 코드
    const input = line.split(' ').map(Number);
    const score = input[0];
    
    // console.log(score);
    // console.log(typeof score);

    // 입력한 값을 정수로 변환
    if (score >= 90 && score <= 100) {
        console.log("A");
    } else if (score >= 80 && score <= 89) {
        console.log("B");
    } else if (score >= 70 && score <= 79) {
        console.log("C");
    } else if (score >= 60 && score <= 69) {
        console.log("D");
    } else {
        console.log("F");
    }

    rl.close();
}).on("close", () => {
    process.exit();
});