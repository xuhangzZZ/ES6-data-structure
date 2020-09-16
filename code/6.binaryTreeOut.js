import {BinarySearchTree} from './6.binaryTree.js'

const bst = new BinarySearchTree();

//测试插入
bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);
bst.insert(6);
console.log(bst);

//测试先序遍历、中序遍历、后序遍历
// bst.preOrderTraverse();

// bst.midOrderTraverse();

// bst.afterOrderTraverse();


//查找最小值、最大值
console.log(bst.min());
console.log(bst.max());

//测试查找
console.log(bst.search(8));
console.log(bst.search(24));


console.log(bst.searchNoRecursive(8));
console.log(bst.searchNoRecursive(24));


//测试删除

// console.log(bst.remove(8));
console.log(bst.remove(7));
// console.log(bst.remove(11));
console.log(bst.remove(34));
bst.midOrderTraverse();
