/**
 * times a fn call
 */
export function time (label, fn, ...args) {
  console.time(label);
  const start = new Date();
  fn(...args);
  const end = new Date();
  console.timeEnd(label);

  return end - start;
}
