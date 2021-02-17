var args = process.argv;
console.log(args[2]);
//0. node.js runtime이 어디에 있는지 알려줌
//1. 지금 이 파일이 어디에 있는지 알려줌
//2. 내가 입력한 값을 알려줌
//ex) node command_line.js mina

//args[1]을 하면 'C:\\Users\\l\\Documents\\GitHub\\node-egoing\\command_line.js'가 출력된다.

if (args[2] === '1') {
    console.log('true');
} else {
    console.log('false');
}