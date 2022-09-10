function reverse(tree) {
  console.log(tree.value);
  reverse(tree.left);
  reverse(tree.right);
}
