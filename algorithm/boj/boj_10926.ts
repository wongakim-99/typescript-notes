import * as readline from "readline";

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.on("line", (line) => {
    const input = line.split(' ');

    const a = input[0];

    console.log(a + "??!");

    rl.close();
}).on("close", () => {
    process.exit();
})