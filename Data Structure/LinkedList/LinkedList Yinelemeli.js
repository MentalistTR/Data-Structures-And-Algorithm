 const LinkedListValues = (head) => {
    const values = []
    fillValues(head,values)
    return values 

 }

 const fillValues = (head,values) => {
    if( head === null) return false 
    values.push(head.val)
    fillValues(head.next)


 }