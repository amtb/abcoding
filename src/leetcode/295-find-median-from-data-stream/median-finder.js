export class MedianFinder {
  constructor() {
    this.nums = [];
  }

  addNum(num) {
    this.nums.push(num);
  }

  findMedian() {
    this.nums.sort((a, b) => a - b);
    const length = this.nums.length;

    if (length % 2 === 0) {
      const half = length / 2;
      return (this.nums[half - 1] + this.nums[half]) / 2;
    } else {
      return this.nums[Math.floor(length / 2)];
    }
  }
}
