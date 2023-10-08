const minumum = (root) =>  {
    if(!root) return 0 

    let minvalue = Infinity;

    const stack = [root]

    while(queue.length > 0) {
        let current = stack.pop()
        if(current.val < minvalue) minvalue = current 

        if(current.left !== null) stack.push(current.left)
        if(current.right !== null) stack.push(current.right) 
    }
}

const minumum1 = (root) =>  {
    if(!root) return Infinity

    let leftmin = minumum1(root.left)
    let rightmin = minumum1(root.right)

    return Math.min(root,leftmin,rightmin);

}

