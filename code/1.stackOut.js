import {Stack} from './1.stack.js'

const stack = new Stack();

stack.push('nba');
stack.push('cba');
stack.push(123);
console.log(stack);

stack.pop();
console.log(stack);

console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());



function dec2bin(num){
    const stack = new Stack();
    while(num > 0){
        stack.push(num % 2);
        num = parseInt(num / 2);
    }
    let binString = '';
    while(!stack.isEmpty()){
        binString += stack.pop();
    }
    return binString;
}

console.log(dec2bin(100));
console.log(dec2bin(8));
console.log(dec2bin(10));
console.log(dec2bin(2));