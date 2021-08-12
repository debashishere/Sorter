class Node {
  // by default next is null
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList {
  head: Node | null = null;

  add(data : number): void{
    const node = new Node(data);

    // if head is null
    if(!this.head) {
      this.head = node;
      return;
    }
    // find last node and add a new node
    let tail = this.head;
    // while the head node has a next prop
    while(tail.next)
      {
      tail = tail.next;
      }  
    tail.next = node;
  };

  get length(): number {
    if(this.head == null){
      return 0;
    }

    let length = 1;
    let node = this.head
    while(node.next){
      length++;
      node = node.next
    }
    return length
  }

  at(index: number): Node{
    // linklist is empty
    if(!this.head){
      throw new Error('Index out of bounds');
    }

    let node : Node | null = this.head;
    let counter = 0;
    while(node){
      if(counter == index){
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error('Index out of bound')
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if(!this.head){
      throw new Error('List is empty')
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if(!this.head){
      return;
    }

    let node: Node | null = this.head;
    while(node){
      console.log(node.data);
      node = node.next;
    }
  }
}