const sum1 = (root) =>  {
    if(!root) return 0 

    return root.val + sum1(root.left) + sum1(root.right)
  

}

const sum = (root) =>  {
    if(!root) return 0 

    let totalsum = 0
    const queue = [root]

    while(queue.length > 0 ) {
        
        const current = queue.shift()
        totalsum += current.val

        if(current.left !== null)  queue.push(current.left)
        if(current.right !== null) queue.push(current.right)
       
    }
 
    return totalsum;

}
