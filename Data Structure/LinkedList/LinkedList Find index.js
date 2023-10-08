const LinkedListFind = (head,index) => {

    let current = head
    let count = 0

    while(current !== null) {
        if(count === index) return current.val
         count++
         current = current.next
    }
    return null
}

const LinkedListFind2 = (head,index) => {
    if(head === null) return null
    if(index === 0) return head.val

    return LinkedListFind2(head.next,index-1)

 
}