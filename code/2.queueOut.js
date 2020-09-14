import {Queue,PriorityQueue} from './2.queue.js'

const queue = new Queue();
queue.enqueue('abc');
queue.enqueue('cba');
queue.enqueue('nba');
queue.enqueue(123);

console.log(queue.items);

queue.dequeue();
console.log(queue.items);

console.log(queue.front());
console.log(queue.isEmpty());
console.log(queue.size());


//击鼓传花
function passGame(nameList,num){
    const queue = new Queue();
    for(let i = 0; i < nameList.length; i++){
        queue.enqueue(nameList[i]);
    }

    while(queue.size() > 1){
        for(let i = 0; i < (num-1); i++){
            queue.enqueue(queue.dequeue());
        }
        queue.dequeue();
    }

    return queue.front();
}

console.log(passGame(['11','22','33','44'],3));


//优先级队列

const pQueue = new PriorityQueue();
pQueue.enqueue("aaa",100);
pQueue.enqueue("bbb",120);
pQueue.enqueue("ccc",110);
pQueue.enqueue("ddd",90);
console.log(pQueue.items);

pQueue.items.forEach(item => {
    console.log(item.element,item.priority);
})