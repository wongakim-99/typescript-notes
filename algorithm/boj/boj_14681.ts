import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input:number[] = [];
rl.on('line', function (line) {
  input.push(parseInt(line));

  // 입력이 2개일 경우 종료
  if (input.length == 2) {
    rl.close();
  }
}).on('close', function () {
  const X = input[0];
  const Y = input[1];

  if(X >0){
        Y > 0 ? console.log(1) : console.log(4)
    }
  if(X <0){
        Y > 0 ? console.log(2) : console.log(3)
    }
    process.exit();
});
