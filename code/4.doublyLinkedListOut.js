import {DoublyLinkedList} from './4.doublyLinkedList.js'

const doublyLinkedList = new DoublyLinkedList();


doublyLinkedList.append('aaa');
doublyLinkedList.append('bbb');
doublyLinkedList.append('ccc');
console.log(doublyLinkedList);


doublyLinkedList.insert(3,'mmm');
doublyLinkedList.insert(0,'xxx');
doublyLinkedList.insert(1,'vvv');
console.log(doublyLinkedList);


console.log(doublyLinkedList.get(0));
console.log(doublyLinkedList.get(3));

console.log(doublyLinkedList.indexOf('xxx'));
console.log(doublyLinkedList.indexOf('mmm'));

console.log(doublyLinkedList.removeAt(0));
console.log(doublyLinkedList.removeAt(3));

console.log(doublyLinkedList);
console.log(doublyLinkedList.update(0,'yyy'));
console.log(doublyLinkedList.update(3,'nnn'));
console.log(doublyLinkedList);

console.log(doublyLinkedList.remove('yyy'));