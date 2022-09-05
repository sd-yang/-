// 队列 先进先出
// API： add delete length

class Queue {
  constructor() {
    this.stackA = [];
    this.stackB = [];
  }

  add(data) {
    this.stackA.push(data);
  }

  delete() {
    while (this.stackA.length) {
      this.stackB.push(this.stackA.pop());
    }
    let data = this.stackB.pop();
    while (this.stackB.length) {
      this.stackA.push(this.stackB.pop());
    }
    return data;
  }

  get length() {
    return this.stackA.length;
  }
}
