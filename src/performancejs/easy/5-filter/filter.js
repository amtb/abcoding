export function filter(array, fn) {
  const items = [];
  array.forEach((element) => {
    if (fn(element)) {
      items.push(element);
    }
  });
  return items;
}
