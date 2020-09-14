import {hashFun, HashTable} from './5.hashTable.js'

console.log(hashFun('name',11));
console.log(hashFun('nba',11));
console.log(hashFun('cba',11));
console.log(hashFun('abc',11));


const hashTable = new HashTable();

hashTable.put('name','xh');
hashTable.put('age','18');
hashTable.put('height','1.88');
hashTable.put('age','20');
console.log(hashTable);
