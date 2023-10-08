const treeIncludes1 = (root,target) =>  {
    if(!root) return false 
    const queue = [root]
  
    while(queue.length > 0) {
        const current = queue.shift()
        if(current.val === target) return true 

    
    if(current.left) queue.push(current.left);
    if(current.right) queue.push(current.right);

    }

    return false 

}

// 2. çözüm

const treeIncludes  = (root,target) =>  {
    if(!root) return false 
    if(root.val === target) return true 

    return treeIncludes(root.left,target) || treeIncludes(root.right,target)
 

}

