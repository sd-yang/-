// 最近最少使用
// https://github.com/sisterAn/JavaScript-Algorithms/issues/9

class LRUCache {
  constructor(limit) {
    this.limit = limit || 3;
    this.cache = new Map();
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if(this.cache.size >= this.limit) {
      // 获取第一个值并删除
      let lastKey = this.cache.keys().next().value;
      this.cache.delete(lastKey);
    }
    this.cache.set(key, value);
  }

  get(key) {
    if (this.cache.has(key)) {
      let value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      console.log(value);
      return value;
    }
    console.log(-1);
    return -1;
  }
}

let cache = new LRUCache( 2 /* 缓存容量 */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4