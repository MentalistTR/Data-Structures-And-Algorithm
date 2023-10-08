const depthFirstValues = (root) =>  {
    if (!root) return []

    const result = []
    const stack = [root]
    while(stack.length > 0) {
        const current = stack.pop();
        result.push(current.val);

        if(current.right) stack.push(current.right)
        if(current.left) stack.push(current.left)
    }

    return result 
}
// 2. cozum

const depthFirstValues1 = (root) =>  {

    if(!root) return []

    const leftValues = depthFirstValues1(root.left)  // b d e
    const RightValues = depthFirstValues1(root.right) // c f

    return [root.val, ...leftValues, ...RightValues]
 
}