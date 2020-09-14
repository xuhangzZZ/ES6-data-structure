import {Node, LinkedList} from './3.linkList.js'

class DoublyNode extends Node{
    constructor(element){
        super(element);
        this.prev = null;
    }
}


export class DoublyLinkedList extends LinkedList{
    constructor(){
        super();
        this.tail = null;
    }

    append(element){
        const newNode = new DoublyNode(element);

        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    //插入
    insert(position, element){
        if(position < 0 || position > this.length) return false

        const newNode = new DoublyNode(element);
        if(position === 0){
            if(!this.head){
                this.head = newNode;
                this.tail = newNode;
            }
            else{
                newNode.next = this.head;
                this.head.prev = newNode;
                this.head = newNode;
            }
        }
        else if(position === this.length){
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        else{
            let index = 0;
            let current = this.head;
            let previous = null;
            while(index++ < position){
                previous = current;
                current = current.next;
            }
            previous.next = newNode;
            newNode.prev = previous;
            newNode.next = current;
            current.prev = newNode;
            
        }
        this.length++

        return true;
    }

    //get不需要重写

    //indexOf不需要重写

    //removeAt
    removeAt(position){
        if(position < 0 || position > this.length -1) return null;

        let current = this.head;
        if(position === 0){
            if(this.length === 1){
                this.head = null;
                this.tail = null;
            }
            else{
                this.head = this.head.next;
                this.head.prev = null;
            }
        }
        else if(position === this.length - 1){
            current = this.tail;
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
        }
        else{
            let index = 0;
            let previous = null;
            while(index++ < position){
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
            current.next.prev = previous;
        }
        this.length--;
        return current.element;
    }

    //remove不需要重写
    //isEmpty不需要重写
    //size不需要重写
}