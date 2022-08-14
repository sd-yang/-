const create = (o) => {
  let Fn = function() {};
  Fn.prototype = o;
  return new Fn();
}