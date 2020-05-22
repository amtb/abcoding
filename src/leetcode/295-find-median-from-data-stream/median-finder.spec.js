import { MedianFinder } from './median-finder';

it('MedianFinder', () => {
  const medianFinder = new MedianFinder();

  medianFinder.addNum(1);
  medianFinder.addNum(2);
  expect(medianFinder.findMedian()).toBe(1.5);
  medianFinder.addNum(3);
  expect(medianFinder.findMedian()).toBe(2);
});
