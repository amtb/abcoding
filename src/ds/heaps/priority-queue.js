export class PriorityQueue {
  constructor() {
    this._elements = ['-'];
  }

  get elements() {
    return this._elements.filter((_, index) => index > 0);
  }

  get size() {
    return this._elements.length - 1;
  }

  getParent(k) {
    return Math.floor(k / 2);
  }

  swap(i, j) {
    [this._elements[i], this._elements[j]] = [
      this._elements[j],
      this._elements[i]
    ];
  }
}
