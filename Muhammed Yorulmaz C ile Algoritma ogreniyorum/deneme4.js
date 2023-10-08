const a = ["foo","bar","baz","qux"];

for(const [idx, element] of a.entries()) {
  document.write(idx);
  document.write(element);
}