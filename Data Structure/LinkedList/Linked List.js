class Node {
    constructor(val) {
        this.val = val
        this.next = null;
    }
}

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')

a.next = b
b.next = c
c.next = d


// const LinkedListValues = (head) => {
//     const values = []
//     let current = head
//     while(current !== null) {
//         values.push(current.val)
//         current = current.next
//     }
//     console.log(values)
//     return values 

// }

const printLinkedList = (head) => {
    if(head === null) return
    console.log(head.val);

    printLinkedList(head.next.next)


}

printLinkedList(a)