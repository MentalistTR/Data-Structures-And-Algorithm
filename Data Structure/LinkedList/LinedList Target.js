const LinkedListFind = (head,target) => {
    if(!head) return false 
    let current = head
    while(current !== null) { 

    if(current.val === target) return true
    
    current = current.next
    }
    return false 

}

const LinkedListFind1 = (head,target) => {
    if ( head === null) return false;
    if (head.val === target) return true
    return LinkedListFind1(head.next,target)
   

}