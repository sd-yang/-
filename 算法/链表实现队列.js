// 从 tail 入列，从 head 出列

class MyQueue {
  head = null;
  tail = null;
  long = 0;

  add(data) {
    this.long += 1;
    let curNode = { value: data, next: null };
    if (!this.head) {
      this.head = curNode;
    }
    let tail = this.tail;
    if (tail) {
      tail.next = curNode;
    }
    this.tail = curNode;
  }

  delete() {
    if (this.long <= 0 || !this.head) return null;
    let value = this.head.value;
    this.head = this.head.next;
    this.long--;
    return value;
  }

  get length() {
    return this.long;
  }
}

let queue = new MyQueue();
queue.add(1);
queue.add(2);
queue.add(3);
console.log(queue.delete());
console.log(queue.length);
console.log(queue.delete());
console.log(queue.delete());
console.log(queue.delete());
console.log(queue.length);