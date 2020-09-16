import {hashFun, HashTable, isPrime} from './5.hashTable.js'
//测试哈希编码
// console.log(hashFun('name',11));
// console.log(hashFun('nba',11));
// console.log(hashFun('cba',11));
// console.log(hashFun('abc',11));


const hashTable = new HashTable();

// hashTable.put('name','xh');
// hashTable.put('age','18');
// hashTable.put('height','1.88');
// hashTable.put('age','20');
// console.log(hashTable);

// console.log(hashTable.get('name'));
// console.log(hashTable.get('age'));
// console.log(hashTable.get('xxx'));

// console.log(hashTable.remove('age'));
// console.log(hashTable.remove('xxx'));


// console.log(hashTable.isEmpty());
// console.log(hashTable.size());

//哈希表扩容测试
hashTable.put('aaa',111);
hashTable.put('bbb',111);
hashTable.put('ccc',111);
hashTable.put('ddd',111);
hashTable.put('eee',111);
// hashTable.put('fff',111);
hashTable.put('mmm',111);
console.log(hashTable);

//判断是否为质数
// console.log(isPrime(3));
// console.log(isPrime(8));
// console.log(isPrime(5));



