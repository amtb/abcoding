import { TreeNode } from '../../ds';
import maxLevelSum from './max-level-sum';

it('maxLevelSum', () => {
  const tree1 = new TreeNode(
    1,
    new TreeNode(7, new TreeNode(7), new TreeNode(-8)),
    new TreeNode(0)
  );

  const tree2 = new TreeNode(
    989,
    null,
    new TreeNode(
      10250,
      new TreeNode(98693),
      new TreeNode(-89388, null, new TreeNode(-32127))
    )
  );

  const cases = [
    { tree: tree1, level: 2 },
    { tree: tree2, level: 2 }
  ];

  cases.forEach(({ tree, level }) => expect(maxLevelSum(tree)).toBe(level));
});
