Array.prototype.myFilter = function (fn) {
  const list = this;
  const result = [];
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    if (fn(item, i)) {
      result.push(item);
    }
  }

  return result;
};
