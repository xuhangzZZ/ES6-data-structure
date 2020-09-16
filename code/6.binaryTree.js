class Node{
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

//二叉搜索树
export class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    //插入
    insert(key){
        const newNode = new Node(key);

        if(!this.root){
            this.root = newNode;
        }
        else{
            this.insertNode(this.root, newNode);
        }
    }

    //用于插入节点的递归函数
    insertNode(node, newNode){
        if(newNode.key > node.key){
            if(!node.right){
                node.right = newNode;
            }
            else{
                this.insertNode(node.right, newNode);
            }      
        }
        else{
            if(!node.left){
                node.left = newNode;
            }
            else{
                this.insertNode(node.left,newNode);
            }  
        }
    }

    //先序遍历
    preOrderTraverse(){
        this.preOrderTraverseNode(this.root);
    }

    preOrderTraverseNode(node){
        if(!node) return;
        else{ 
            console.log(node.key);
            this.preOrderTraverseNode(node.left);
            this.preOrderTraverseNode(node.right);
        }
    }

    //中序遍历
    midOrderTraverse(){
        this.midOrderTraverseNode(this.root);
    }

    midOrderTraverseNode(node){
        if(!node) return;
        else{
            this.midOrderTraverseNode(node.left);
            console.log(node.key);
            this.midOrderTraverseNode(node.right);
        }
    }

    //后序遍历
    afterOrderTraverse(){
        this.afterOrderTraverseNode(this.root);
    }

    afterOrderTraverseNode(node){
        if(!node) return;
        else{
            this.afterOrderTraverseNode(node.left);
            this.afterOrderTraverseNode(node.right);
            console.log(node.key);
        }
    }

    //查找最小值
    min(){
        if(!this.root) return null;
        else{
            let current = this.root;
            while(current.left){
                current = current.left;
            }
            return current.key;
        }
    }

    max(){
        if(!this.root) return null;
        else{
            let current = this.root;
            while(current.right){
                current = current.right;
            }
            return current.key;
        }
    }

    //查找的递归实现
    search(key){
        return this.searchNode(this.root, key);
    }

    searchNode(node, key){
        if(!node) return false;
        
        if(key < node.key){
            return this.searchNode(node.left, key);
        }
        else if(key > node.key){
            return this.searchNode(node.right, key)
        }
        else return true;
        
    }

    //查找的非递归实现
    searchNoRecursive(key){
        let node = this.root;
        while(node){
            if(key < node.key){
                node = node.left;
            }
            else if(key > node.key){
                node = node.right;
            }
            else return true;
        }
        return false;
    }

    //删除节点
    remove(key){
        let current = this.root;
        let parent = null;
        let isLeftChild = true; //判断是否为左子节点
        
        while(current.key !== key){
            parent = current;

            if(key < current.key){
                isLeftChild = true;
                current = current.left;
            }
            else{
                isLeftChild = false;
                current = current.right;
            }

            if(!current) return false;
        }

        //情况一：要删除的节点为叶子节点
        if(current.left === null && current.right === null){
            if(current === this.root){
                this.root = null;
            }
            else if(isLeftChild){
                parent.left = null;
            }
            else{
                parent.right = null;
            }
        }

        //情况二：要删除的节点只有一个子节点
                //只有左子节点
        else if(current.right === null){
            if(current === this.root){
                this.root = current.left;
            }
            else if(isLeftChild){
                parent.left = current.left;
            }
            else{
                parent.right = current.left;
            }
        }
                //只有右子节点
        else if(current.left === null){
            if(current === this.root){
                this.root = current.right;
            }
            else if(isLeftChild){
                parent.left = current.right;
            }
            else{
                parent.right = current.right;
            }
        }

        //情况三：删除的节点有两个子节点
        else{
            let successor = this.getSuccessor(current)
            if(current === this.root){
                this.root = successor;
            }
            else if(isLeftChild){
                parent.left = successor;
            }
            else{
                parent.right = successor;
            }
            successor.left = current.left;
        }

        return true;
    }

    getSuccessor(delNode){
        let successor = delNode;
        let successorParent = delNode;
        let current = delNode.right;

        while(current != null){
            successorParent = successor;
            successor = current;
            current = current.left;
        }

        if(successor != delNode.right){
            successorParent.left = successor.right;
            successor.right = delNode.right;
        }

        return successor;
    }
}