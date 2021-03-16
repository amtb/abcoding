import { TreeNode } from '../../ds';
import deepestLeavesSum from './deepest-leaves-sum';

it('deepestLeavesSum', () => {
  const tree = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4, new TreeNode(7)), new TreeNode(5)),
    new TreeNode(3, null, new TreeNode(6, null, new TreeNode(8)))
  );

  expect(deepestLeavesSum(tree)).toBe(15);
});
