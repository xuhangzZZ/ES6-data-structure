export function hashFun(str, max){
    let hashCode = 0;
    for(let i = 0; i < str.length; i++){
        hashCode = hashCode * 31 + str[i].charCodeAt();
    }

    hashCode = hashCode % max;
    return hashCode;
}

export class HashTable{
    constructor(){
        this.storage = [];
        this.limit = 8;
        this.count = 0;
    }

    hashFun(str, max){
        let hashCode = 0;
        for(let i = 0; i < str.length; i++){
            hashCode = hashCode * 31 + str[i].charCodeAt();
        }
    
        hashCode = hashCode % max;
        return hashCode;
    }


    put(key, value){
        const index = this.hashFun(key, this.limit);
        let budget = this.storage[index];
        if(budget === undefined){
            budget = [];
            this.storage[index] = budget;
        }

        //判断是插入还是修改
        let overide = false;
        for(let i = 0; i < budget.length; i++){
            let tuple = budget[i];
            if(tuple[0] === key){
                tuple[1] = value;
                overide = true;
            }
        }
        if(!overide){
            budget.push([key,value]);
            this.count++;
        }
    }
}