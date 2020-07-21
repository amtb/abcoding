import { PriorityQueue } from './priority-queue';

export class MaxHeap extends PriorityQueue {
  /**
   * bubble up the element and exchange while it's bigger than the parent
   * @param {number} k
   */
  swim(k) {
    while (k > 1) {
      const parentIndex = this.getParent(k);
      if (this._elements[parentIndex] >= this._elements[k]) {
        break;
      }

      this.swap(parentIndex, k);
      k = parentIndex;
    }
  }

  sink(k) {
    const length = this._elements.length;
    while (2 * k < length) {
      let child = 2 * k;
      // get the bigger child
      if (
        child < length - 1 &&
        this._elements[child] < this._elements[child + 1]
      ) {
        child += 1;
      }

      if (this._elements[k] >= this._elements[child]) {
        break;
      }

      this.swap(child, k);

      k = child;
    }
  }

  insert(item) {
    this._elements.push(item);
    this.swim(this._elements.length - 1);
  }

  deleteMax() {
    const max = this._elements[1];
    this.swap(1, this._elements.length - 1);
    this._elements.length -= 1;
    this.sink(1);
    return max;
  }

  getMax() {
    return this._elements[1];
  }
}
