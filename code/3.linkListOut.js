import {LinkedList} from './3.linkList.js'
const linkedList = new LinkedList();
linkedList.append('aaa');
linkedList.append('bbb');
linkedList.append('ccc');
linkedList.append('ddd');

console.log(linkedList);

linkedList.insert(1,'vvv');
linkedList.insert(3,'xxx');
console.log(linkedList);

console.log(linkedList.get(1));
console.log(linkedList.get(5));

console.log(linkedList.indexOf('xxx'));


console.log(linkedList.removeAt(3));
console.log(linkedList);


console.log(linkedList.update(1,'mmm'));
console.log(linkedList);

console.log(linkedList.remove('mmm'));
console.log(linkedList);


console.log(linkedList.isEmpty());
console.log(linkedList.size());