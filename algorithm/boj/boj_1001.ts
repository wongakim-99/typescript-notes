import * as readline from "readline";

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.on('line', (line) => {
    //입력한 값을 처리하는 코드
    const input = line.split(' ').map(Number);
    const a = input[0];
    const b = input[1];
    console.log(a - b);

    rl.close();
}).on("close", () => {
    process.exit();
})