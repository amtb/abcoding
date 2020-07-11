import buildTree from './build-tree';
import { TreeNode } from '../../ds';

it('buildTree', () => {
  const tree = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
  );

  // console.log(tree);

  const built = buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]);
  console.log(built);
  expect(built).toEqual(tree);
});
