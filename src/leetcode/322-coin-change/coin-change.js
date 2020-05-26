/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const cache = {};
  const change = (coins, amount) => {
    // let's not reinvent the wheel
    const cachedResult = cache[amount];
    if (cachedResult !== undefined) {
      return cachedResult;
    }

    let min = Infinity;
    if (amount === 0) {
      return 0;
    }

    /**
     * remove a coin, and check the number of coins for the rest
     * better change => keep it as min
     * do this for all the coins
     */
    for (let i = 0; i < coins.length; i++) {
      const rest = amount - coins[i];
      if (rest >= 0) {
        const changeOfRest = change(coins, rest);
        min = Math.min(min, 1 + changeOfRest);
      }
    }

    cache[amount] = min;
    return min;
  };

  const min = change(
    coins.sort((a, b) => b - a),
    amount
  );
  return min === Infinity ? -1 : min;
};

export default coinChange;
