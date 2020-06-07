import twoCitySchedCost from './two-city-sched-cost';

it('twoCitySchedCost', () => {
  expect(
    twoCitySchedCost([
      [10, 20],
      [30, 200],
      [400, 50],
      [30, 20]
    ])
  ).toBe(110);
  expect(
    twoCitySchedCost([
      [259, 770],
      [448, 54],
      [926, 667],
      [184, 139],
      [840, 118],
      [577, 469]
    ])
  ).toBe(1859);
  expect(
    twoCitySchedCost([
      [100, 20],
      [30, 200],
      [400, 50],
      [30, 20]
    ])
  ).toBe(130);
});
