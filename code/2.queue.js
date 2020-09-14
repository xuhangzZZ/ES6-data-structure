export class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
        return this.items.shift();
    }

    front(){
        if(this.isEmpty()) return null;
        return this.items[0];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }
}




class QueueElement{
    constructor(element, priority){
        this.element = element;
        this.priority = priority;
    }
}

//优先级队列
export class PriorityQueue extends Queue{
    enqueue(element, priority){
        const queueElelment = new QueueElement(element, priority);
        if(this.isEmpty()){
            this.items.push(queueElelment);
        }
        else{
            let added = false;
            for(let i = 0; i < this.items.length; i++){
                if(queueElelment.priority < this.items[i].priority){
                    this.items.splice(i,0,queueElelment);
                    added = true;
                    break;
                }
            }
            if(!added){
                this.items.push(queueElelment);
            }
        }
    }
    
}