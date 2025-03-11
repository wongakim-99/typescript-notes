import * as readline from "readline";

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.on('line', (line) => {
    // 입력한 값을 처리
    const input = line.split(' ').map(Number);
    const year = input[0];

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(1);
    } else {
        console.log(0);
    }

    rl.close();
}).on("close", () => {
    process.exit();
})