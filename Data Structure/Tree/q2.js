const depthFirstValues1 = (root) =>  {
    if(!root) return []

    const result = []
    const queue = [root]
    while(queue.length > 0) {
        console.log(queue)
        const current = queue.shift()
       
        result.push(current.val)

        if(current.left !== null ) queue.push(current.left)  
        if(current.right!== null ) queue.push(current.right) 
    }

       return result 
 
}

depthFirstValues1([1,2,3,4,5,6,7])