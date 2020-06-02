import { LinkedList } from '../../ds';
import deleteNode from './delete-node';

describe('deleteNode', () => {
  it('should delete any node', () => {
    const list = LinkedList.fromArray([4, 5, 1, 9]);
    const nodes = list.getNodes();
    deleteNode(nodes[1]);
    expect(list).toEqual(LinkedList.fromArray([4, 1, 9]));
  });

  it('should delete the head', () => {
    const list = LinkedList.fromArray([2, 0, 1, 3]);
    const nodes = list.getNodes();
    deleteNode(nodes[0]);
    expect(list).toEqual(LinkedList.fromArray([0, 1, 3]));
  });
});
