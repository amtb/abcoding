import { MaxHeap } from './max-heap';
import { MinHeap } from './min-heap';

test('MaxHeap', () => {
  const maxHeap = new MaxHeap();
  ['A', 'C', 'B', 'D'].forEach((char) => maxHeap.insert(char));
  expect(maxHeap.elements).toEqual(['D', 'C', 'B', 'A']);

  expect(maxHeap.getMax()).toBe('D');
  expect(maxHeap.deleteMax()).toBe('D');
  expect(maxHeap.getMax()).toBe('C');
});

test('MinHeap', () => {
  const minHeap = new MinHeap();
  ['C', 'T', 'B', 'D', 'A', 'X'].forEach((char) => minHeap.insert(char));
  expect(minHeap.elements).toEqual(['A', 'B', 'C', 'T', 'D', 'X']);

  expect(minHeap.getMin()).toBe('A');
  expect(minHeap.deleteMin()).toBe('A');
  expect(minHeap.getMin()).toBe('B');
});
