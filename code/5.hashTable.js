//max哈希表长度
export function hashFun(str, max){
    let hashCode = 0;
    for(let i = 0; i < str.length; i++){
        hashCode = hashCode * 31 + str[i].charCodeAt();
    }
    //取余
    hashCode = hashCode % max;
    return hashCode;
}

export function isPrime(num){
    let tem = Math.sqrt(num);
    for(let i = 2; i < tem; i++){
        if(num % i === 0) return false
    }
    return true
}

export class HashTable{
    constructor(){
        this.storage = [];
        //最大数量
        this.limit = 7;
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
        //每个字段对应一个数组，用于存放映射导相同字段的数据
        let budget = this.storage[index];
        if(budget === undefined){
            budget = [];
            this.storage[index] = budget;
        }

        //判断是插入还是修改
        let overide = false;
        for(let i = 0; i < budget.length; i++){
            //以一个数组tuple的形式，存放键值对
            let tuple = budget[i];
            if(tuple[0] === key){
                //如果已存在，则替换，并改变标记overide
                tuple[1] = value;
                overide = true;
            }
        }
        //不存在则push进去
        if(!overide){
            budget.push([key,value]);
            this.count++;

            if(this.count > this.limit * 0.75){
                let newLimit = this.limit * 2;
                newLimit = this.getPrime(newLimit);
                this.reSize(newLimit);
            }
        }
    }

    //根据key值取出value
    get(key){
        //确认该key值在哈希表哪个字段
        const index = this.hashFun(key, this.limit);
        //取出该字段的数组
        const budget = this.storage[index];
        //如果数组未定义
        if(budget === undefined) return null;
        //遍历数组
        for(let i = 0; i < budget.length; i++){
            let tuple = budget[i];
            if(tuple[0] === key){
                //如果键相同，返回值
                return tuple[1];
            }
        }
        //遍历未找到相同的key，则返回null
        return null;
    }

    //根据key删除
    remove(key){
        //确认该key值在哈希表哪个字段
        const index = this.hashFun(key, this.limit);
        //取出该字段的数组
        const budget = this.storage[index];
        //如果数组未定义
        if(budget === undefined) return null;
        //遍历数组
        for(let i = 0; i < budget.length; i++){
            let tuple = budget[i];
            if(tuple[0] === key){
                //如果键相同，删除
                budget.splice(i,1);
                //个数减一，并返回值
                this.count--;
                if(this.limit < 8 && this.count < this.limit * 0.25){
                    let newLimit = Math.floor(this.limit / 2);
                    newLimit = this.getPrime(newLimit)
                    this.reSize(newLimit);
                }
                return tuple[1];
            }
        }
        return null;
    }

    //判断是否为空
    isEmpty(){
        return this.count === 0;
    }

    //计算长度
    size(){
        return this.count;
    }

    //对哈希表进行扩容
    reSize(newLimit){
        //保存旧数据,改变容量，清空哈希表进行重构
        const oldStorage = this.storage;
        this.limit = newLimit;
        this.count = 0;
        this.storage = [];

        oldStorage.forEach((budget) => {
            if(budget === undefined) return
            for(let i = 0; i < budget.length; i++){
                const tuple = budget[i];
                this.put(tuple[0], tuple[1]);
            }
        })
    }

    //判断一个数是否为质数
    isPrime(num){
        let tem = Math.sqrt(num);
        for(let i = 2; i < tem; i++){
            if(num % i === 0) return false
        }
        return true
    }

    getPrime(num){
        while(!isPrime(num)){
            num++;
        }
        return num++;
    }
}