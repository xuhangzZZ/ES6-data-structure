export class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

export class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    //添加元素至尾部
    append(element){
        const newNode = new Node(element);
        if(!this.head){
            this.head = newNode;
        }
        else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }

            current.next = newNode;
        }
        this.length++;
    }

    //插入元素
    insert(position, element){
        const newNode = new Node(element);
        if(position < 0 || position > this.length) return false;
        else{
            let index = 0;
            let current = this.head;
            let previous = null;
            while(index++ < position){
                previous = current;
                current = current.next;
            }
            newNode.next = current;
            previous.next = newNode;
        }

        this.length++;
        return true;
    }

    //获取对应位置的元素
    get(position){
        if(position < 0 || position > this.length-1) return null;
        
        let index = 0;
        let current = this.head;
        while(index++ < position){
            current = current.next;
        }
        return current;

    }

    //根据元素获取索引，如果没有则返回-1
    indexOf(element){
        let index = 0;
        let current = this.head;
        while(current){
            if(current.element === element) return index;
            index++;
            current = current.next;
        }
        return -1;
    }

    //删除某个位置的元素
    removeAt(position){
        if(position < 0 || position > this.length -1) return null;

        let index = 0;
        let previous = null;
        let current = this.head;
        if(position === 0){
            this.head = current.next;
        }
        else{
            while(index++ < position){
                previous = current;
                current = current.next
            }
            previous.next = current.next;
        }
        this.length--;
        return current.element;
    }

    //更新某个位置的元素
    update(position, element){
        const result = this.removeAt(position);
        this.insert(position, element);
        return result;
    }

    //删除某个元素
    remove(element){
        const index = this.indexOf(element);
        if(index === -1) return
        this.removeAt(index);
        return index;
    }

    //判断是否为空
    isEmpty(){
        return this.length === 0;
    }

    //返回链表长度
    size(){
        return this.length;
    }
}